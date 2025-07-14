import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { db } from "./db";
import { waitlist, insertWaitlistSchema } from "@shared/schema";
import { forwardWaitlistSignup } from "./email";

// Response types for consistent API responses
interface ApiSuccess {
  success: true;
  message: string;
  [key: string]: any;
}

interface ApiError {
  success: false;
  message: string;
  [key: string]: any;
}

type ApiResponse = ApiSuccess | ApiError;

/**
 * Registers all API routes for the application
 * @param app Express application instance
 * @returns HTTP server instance
 */
export async function registerRoutes(app: Express): Promise<Server> {
  // Register the API endpoints
  registerAdminRoutes(app);
  registerWaitlistRoutes(app);

  // Create and return the HTTP server
  const httpServer = createServer(app);
  return httpServer;
}

/**
 * Registers admin-only routes
 * @param app Express application instance
 */
function registerAdminRoutes(app: Express): void {
  // Admin endpoint to view collected emails
  app.get("/api/admin/waitlist", async (req: Request, res: Response) => {
    const emails = await storage.getWaitlistEmails();
    res.status(200).json({
      count: emails.length,
      emails: emails
    });
  });
}

/**
 * Registers waitlist-related routes
 * @param app Express application instance
 */
function registerWaitlistRoutes(app: Express): void {
  // API endpoint for waitlist signups
  app.post("/api/waitlist", async (req: Request, res: Response) => {
    try {
      // Validate the request body
      const validatedData = insertWaitlistSchema.parse(req.body);
      
      // Store email using storage service
      await storage.addToWaitlist(validatedData.email);
      console.log("Email added to waitlist:", validatedData.email);
      
      // Success - email was stored in database
      sendSuccessResponse(res, {
        message: "Thank you for joining our waitlist!"
      });
    } catch (error: any) {
      handleWaitlistError(res, error);
    }
  });
}

/**
 * Handles errors from the waitlist signup process
 * @param res Express response object
 * @param error The error that occurred
 */
function handleWaitlistError(res: Response, error: any): void {
  console.error("Waitlist error:", error);
  
  if (error instanceof z.ZodError) {
    // Return validation errors
    sendErrorResponse(res, 400, {
      message: "Validation error",
      errors: error.errors
    });
  } else {
    // Check for unique constraint violation
    const errorStr = String(error);
    if (errorStr.includes('unique constraint') && errorStr.includes('email')) {
      sendErrorResponse(res, 409, {
        message: "This email is already on our waitlist."
      });
    } else {
      // Return generic error
      sendErrorResponse(res, 500, {
        message: "An error occurred while processing your request"
      });
    }
  }
}

/**
 * Sends a standardized success response
 * @param res Express response object
 * @param data Additional data to include in the response
 */
function sendSuccessResponse(res: Response, data: Omit<ApiSuccess, 'success'>): void {
  res.status(200).json({
    success: true,
    ...data
  });
}

/**
 * Sends a standardized error response
 * @param res Express response object
 * @param statusCode HTTP status code
 * @param data Additional data to include in the response
 */
function sendErrorResponse(res: Response, statusCode: number, data: Omit<ApiError, 'success'>): void {
  res.status(statusCode).json({
    success: false,
    ...data
  });
}
