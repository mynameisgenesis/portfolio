import nodemailer from 'nodemailer'

const MAX_NAME_LENGTH = 100
const MAX_EMAIL_LENGTH = 254
const MAX_MESSAGE_LENGTH = 5000
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const json = (body, status = 200, headers = {}) =>
  Response.json(body, { status, headers })

const escapeHtml = (value) =>
  value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
      })[character],
  )

const cleanHeader = (value) => value.replace(/[\r\n]+/g, ' ').trim()

export default async function handler(request) {
  if (request.method !== 'POST') {
    return json({ error: 'Method not allowed.' }, 405, { Allow: 'POST' })
  }

  let body
  try {
    body = await request.json()
  } catch {
    return json({ error: 'The request body must be valid JSON.' }, 400)
  }

  const { name = '', email = '', message = '', website = '' } = body ?? {}

  // Bots commonly fill hidden fields. Return success without sending anything.
  if (website) {
    return json({ ok: true })
  }

  const safeName = cleanHeader(String(name))
  const safeEmail = cleanHeader(String(email)).toLowerCase()
  const safeMessage = String(message).trim()

  if (
    !safeName ||
    safeName.length > MAX_NAME_LENGTH ||
    !EMAIL_PATTERN.test(safeEmail) ||
    safeEmail.length > MAX_EMAIL_LENGTH ||
    !safeMessage ||
    safeMessage.length > MAX_MESSAGE_LENGTH
  ) {
    return json({ error: 'Please provide valid contact details.' }, 400)
  }

  const environment = Object.fromEntries(
    [
      'SMTP_HOST',
      'SMTP_PORT',
      'SMTP_SECURE',
      'SMTP_USER',
      'SMTP_PASS',
      'MAIL_FROM',
      'MAIL_TO',
    ].map((key) => [key, Netlify.env.get(key)]),
  )
  const missingEnvironmentVariable = Object.entries(environment).find(
    ([key, value]) => key !== 'SMTP_SECURE' && !value,
  )

  if (missingEnvironmentVariable) {
    console.error(`Missing email configuration: ${missingEnvironmentVariable[0]}`)
    return json({ error: 'Email is not configured yet.' }, 500)
  }

  const smtpPort = Number(environment.SMTP_PORT)
  if (!Number.isInteger(smtpPort)) {
    console.error('SMTP_PORT must be a number.')
    return json({ error: 'Email is not configured correctly.' }, 500)
  }

  const transporter = nodemailer.createTransport({
    host: environment.SMTP_HOST,
    port: smtpPort,
    secure: environment.SMTP_SECURE === 'true',
    auth: {
      user: environment.SMTP_USER,
      pass: environment.SMTP_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: environment.MAIL_FROM,
      to: environment.MAIL_TO,
      replyTo: safeEmail,
      subject: `Portfolio contact from ${safeName}`,
      text: `${safeMessage}\n\nFrom: ${safeName} <${safeEmail}>`,
      html: `
        <p>${escapeHtml(safeMessage).replace(/\n/g, '<br>')}</p>
        <hr>
        <p><strong>From:</strong> ${escapeHtml(safeName)}
          &lt;${escapeHtml(safeEmail)}&gt;</p>
      `,
    })

    return json({ ok: true })
  } catch (error) {
    console.error('SMTP send failed:', error)
    return json(
      { error: 'Your message could not be sent. Please try again later.' },
      502,
    )
  }
}

export const config = {
  path: '/api/contact',
}
