import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

// Waitlist registration schema
const waitlistSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  interest: z.enum(["creating", "discovering", "collaborating", "other"])
});

type WaitlistEntry = z.infer<typeof waitlistSchema>;

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint for waitlist signups
  app.post("/api/waitlist", async (req: Request, res: Response) => {
    try {
      // Validate the request body
      const validatedData = waitlistSchema.parse(req.body);
      
      // In a real application, you would store this data in a database
      // For now, we'll just log it and return a success response
      console.log("New waitlist signup:", validatedData);
      
      res.status(200).json({ 
        success: true, 
        message: "Thank you for joining our waitlist!" 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Return validation errors
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        // Return generic error
        res.status(500).json({ 
          success: false, 
          message: "An error occurred while processing your request" 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
