import { MailService } from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY environment variable must be set");
}

const mailService = new MailService();
mailService.setApiKey(process.env.SENDGRID_API_KEY);

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  try {
    const emailContent = {
      to: params.to,
      from: params.from,
      subject: params.subject,
      text: params.text || params.subject,
    };
    
    if (params.html) {
      Object.assign(emailContent, { html: params.html });
    }
    
    await mailService.send(emailContent);
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}

export async function forwardWaitlistSignup(email: string): Promise<boolean> {
  return sendEmail({
    to: 'musilinda.app@gmail.com',
    from: 'noreply@musilinda.com', // Make sure this domain is verified in your SendGrid account
    subject: 'New Waitlist Signup',
    text: `A new user has signed up for the waitlist: ${email}`,
    html: `
      <h2>New Waitlist Signup</h2>
      <p>A new user has signed up for the Musilinda waitlist:</p>
      <p><strong>${email}</strong></p>
      <p>Date: ${new Date().toLocaleString()}</p>
    `
  });
}