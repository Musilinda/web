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
    
    console.log('About to send email with content:', {
      to: emailContent.to,
      from: emailContent.from,
      subject: emailContent.subject
    });
    
    await mailService.send(emailContent);
    console.log('Email sent successfully');
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    
    // Check if it's a domain authentication error
    try {
      // Check for error details in a safer way
      const errorObj = error as any;
      if (errorObj && errorObj.response && errorObj.response.body && errorObj.response.body.errors) {
        console.error('SendGrid error details:', JSON.stringify(errorObj.response.body.errors, null, 2));
      }
    } catch (logError) {
      console.error('Error parsing SendGrid error:', logError);
    }
    
    return false;
  }
}

export async function forwardWaitlistSignup(email: string): Promise<boolean> {
  try {
    console.log('Attempting to send email to:', 'musilinda.app@gmail.com');
    
    // Add more detailed logging
    const result = await sendEmail({
      to: 'musilinda.app@gmail.com',
      from: 'stephan@musilinda.com', // Using domain email
      subject: 'New Waitlist Signup',
      text: `A new user has signed up for the waitlist: ${email}`,
      html: `
        <h2>New Waitlist Signup</h2>
        <p>A new user has signed up for the Musilinda waitlist:</p>
        <p><strong>${email}</strong></p>
        <p>Date: ${new Date().toLocaleString()}</p>
      `
    });
    
    console.log('Email send result:', result);
    return result;
  } catch (error) {
    console.error('Error in forwardWaitlistSignup:', error);
    return false;
  }
}