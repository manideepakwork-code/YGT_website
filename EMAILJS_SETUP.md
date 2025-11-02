# EmailJS Setup Instructions

To enable the contact form to send emails, you need to set up EmailJS:

## Steps:

1. **Create a Free EmailJS Account**
   - Go to https://www.emailjs.com/
   - Sign up for a free account (allows 200 emails/month)

2. **Create an Email Service**
   - Go to "Email Services" in the dashboard
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the setup instructions to connect your email

3. **Create an Email Template**
   - Go to "Email Templates" in the dashboard
   - Click "Create New Template"
   - Use this template structure:
     ```
     Subject: New Contact Form Submission from {{from_name}}
     
     Name: {{from_name}}
     Mobile: {{from_mobile}}
     Query: {{message}}
     
     This email was sent from your website contact form.
     ```
   - Set "To Email" as: sales@yadardageetatraders.com
   - Save the template and note the Template ID

4. **Get Your Public Key**
   - Go to "Account" → "General"
   - Copy your "Public Key"

5. **Update Contact.jsx**
   - Open `src/pages/Contact.jsx`
   - Replace these values in the `handleSubmit` function:
     - `YOUR_SERVICE_ID` → Your Email Service ID
     - `YOUR_TEMPLATE_ID` → Your Email Template ID
     - `YOUR_PUBLIC_KEY` → Your Public Key

## Alternative: Simple Backend Solution

If you prefer not to use EmailJS, you can:
- Set up a simple Node.js backend with Nodemailer
- Use Formspree (another form service)
- Use SendGrid or Mailgun APIs

## Testing

After setup, test the form by:
1. Going to `/contact` page
2. Filling out the form
3. Submitting it
4. Checking your email inbox (sales@yadardageetatraders.com)

