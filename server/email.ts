import { MailService } from '@sendgrid/mail';

// Configuration constants
const ADMIN_EMAIL = 'musilinda.app@gmail.com';
const SENDER_EMAIL = 'stephan@musilinda.com';

// Email service setup
if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY environment variable must be set");
}

const mailService = new MailService();
mailService.setApiKey(process.env.SENDGRID_API_KEY);

// Type definitions
interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

/**
 * Sends an email using SendGrid
 * @param params Email parameters including to, from, subject, text and html
 * @returns Promise<boolean> indicating success or failure
 */
export async function sendEmail(params: EmailParams): Promise<boolean> {
  try {
    // Create email content object
    const emailContent = {
      to: params.to,
      from: params.from,
      subject: params.subject,
      text: params.text || params.subject,
    };
    
    // Add HTML content if provided
    if (params.html) {
      Object.assign(emailContent, { html: params.html });
    }
    
    // Log email attempt without showing full content
    console.log('About to send email:', {
      to: emailContent.to,
      from: emailContent.from,
      subject: emailContent.subject
    });
    
    // Send the email
    await mailService.send(emailContent);
    console.log('Email sent successfully');
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    
    // Extract and log detailed error information
    try {
      const errorObj = error as any;
      if (errorObj?.response?.body?.errors) {
        console.error('SendGrid error details:', 
          JSON.stringify(errorObj.response.body.errors, null, 2));
      }
    } catch (logError) {
      console.error('Error parsing SendGrid error:', logError);
    }
    
    return false;
  }
}

/**
 * Forwards waitlist signup notifications to admin
 * @param email The email address that signed up
 * @returns Promise<boolean> indicating success or failure
 */
export async function forwardWaitlistSignup(email: string): Promise<boolean> {
  try {
    console.log('Forwarding waitlist signup to admin:', ADMIN_EMAIL);
    
    // Current timestamp for email
    const timestamp = new Date().toLocaleString();
    
    // Send the notification email
    const result = await sendEmail({
      to: ADMIN_EMAIL,
      from: SENDER_EMAIL,
      subject: 'New Waitlist Signup',
      text: `A new user has signed up for the waitlist: ${email} (Time: ${timestamp})`,
      html: `
        <h2>New Waitlist Signup</h2>
        <p>A new user has signed up for the Musilinda waitlist:</p>
        <p><strong>${email}</strong></p>
        <p>Date: ${timestamp}</p>
      `
    });
    
    return result;
  } catch (error) {
    console.error('Error in forwardWaitlistSignup:', error);
    return false;
  }
}