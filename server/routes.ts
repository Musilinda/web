import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { db } from "./db";
import { waitlist, insertWaitlistSchema } from "@shared/schema";
import { forwardWaitlistSignup } from "./email";

// Temporary in-memory storage for collected emails
const waitlistEmails = new Set<string>();

export async function registerRoutes(app: Express): Promise<Server> {
  // Admin endpoint to view collected emails
  app.get("/api/admin/waitlist", (req: Request, res: Response) => {
    res.status(200).json({
      count: waitlistEmails.size,
      emails: Array.from(waitlistEmails)
    });
  });
  
  // API endpoint for waitlist signups
  app.post("/api/waitlist", async (req: Request, res: Response) => {
    try {
      // Validate the request body
      const validatedData = insertWaitlistSchema.parse(req.body);
      
      // Store email in memory
      waitlistEmails.add(validatedData.email);
      console.log("Email collected:", validatedData.email);
      console.log("Current waitlist emails:", Array.from(waitlistEmails));
      
      // Attempt to forward the email to admin
      const emailSent = await forwardWaitlistSignup(validatedData.email);
      
      if (emailSent) {
        // Success - email was stored and notification was sent
        res.status(200).json({ 
          success: true, 
          message: "Thank you for joining our waitlist!" 
        });
      } else {
        // Error - email was stored but notification failed
        res.status(500).json({ 
          success: false, 
          message: "SendGrid error: Unable to process your request. The email server is not properly configured." 
        });
      }
    } catch (error: any) {
      console.error("Waitlist error:", error);
      
      if (error instanceof z.ZodError) {
        // Return validation errors
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        // Check for unique constraint violation
        const errorStr = String(error);
        if (errorStr.includes('unique constraint') && errorStr.includes('email')) {
          res.status(409).json({
            success: false,
            message: "This email is already on our waitlist."
          });
        } else {
          // Return generic error
          res.status(500).json({ 
            success: false, 
            message: "An error occurred while processing your request" 
          });
        }
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
