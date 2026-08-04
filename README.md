# Genesis Belmonte — Portfolio

A responsive portfolio built with React and Vite. The contact form is backed by
a Netlify Function and sends messages through an SMTP account with Nodemailer.

## Requirements

- Node.js 20.19 or newer
- npm
- A Netlify account for the hosted contact form
- SMTP credentials from an email provider

## Local setup

Install the dependencies:

```bash
npm install
```

Copy the environment template and replace the placeholders with your SMTP
credentials:

```bash
cp .env.example .env
```

Run the frontend by itself:

```bash
npm run dev
```

Vite does not run Netlify Functions, so `/api/contact` is unavailable when using
`npm run dev`. To test the complete site, including email sending, use Netlify
Dev:

```bash
npx netlify dev
```

Never commit `.env` or SMTP passwords. The repository ignores local environment
files while keeping `.env.example` available as documentation.

## Environment variables

| Variable | Description |
| --- | --- |
| `SMTP_HOST` | SMTP server hostname, such as `smtp.gmail.com` |
| `SMTP_PORT` | SMTP port; normally `465` or `587` |
| `SMTP_SECURE` | `true` for implicit TLS on port 465; otherwise `false` |
| `SMTP_USER` | SMTP account username |
| `SMTP_PASS` | SMTP password, token, or provider-issued app password |
| `MAIL_FROM` | Verified sender address; usually the SMTP account address |
| `MAIL_TO` | Address that receives portfolio messages |

For Gmail, enable two-step verification and create an App Password. Do not use
your normal Google password as `SMTP_PASS`.

## Netlify deployment

The repository includes [`netlify.toml`](./netlify.toml), which builds the Vite
site into `dist` and packages functions from `netlify/functions`.

Add all variables from `.env.example` to the Netlify site as runtime environment
variables. If deploying from a custom CI pipeline, ensure the variables are
available to the deployed function, not only to the build command.

For a manual CLI deployment:

```bash
npm ci
npm run build
npx netlify deploy --prod --dir=dist --functions=netlify/functions
```

After deployment, this request should return JSON with a `405` status, confirming
that the function route exists:

```bash
curl -i https://your-domain.example/api/contact
```

The contact form sends a `POST` request to `/api/contact`. The function validates
the submission, rejects common bot submissions, sanitizes email content, and
keeps SMTP credentials on the server.

## Scripts

```bash
npm run dev      # Start the Vite frontend
npm run build    # Create the production build in dist
npm run preview  # Preview the production build locally
```

## Project structure

```text
src/                          React portfolio UI
src/components/Contact.tsx   Contact form client
netlify/functions/contact.js SMTP-backed contact endpoint
netlify.toml                  Netlify build and function configuration
.env.example                 Environment variable template
```
