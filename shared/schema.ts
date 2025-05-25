import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

/**
 * Database schema for the Musilinda application
 * 
 * This file defines all database tables and their relationships,
 * as well as the corresponding Zod validation schemas.
 */

// ==========================================
// User account table
// ==========================================
/**
 * Users table for account authentication
 */
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

/**
 * Schema for inserting new users
 * Excludes auto-generated fields
 */
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
}).extend({
  // Add additional validation if needed
  username: z.string().min(3).max(50),
  password: z.string().min(8)
});

// User type definitions
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// ==========================================
// Waitlist table for early access signups
// ==========================================
/**
 * Waitlist table for early access signups
 */
export const waitlist = pgTable("waitlist", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull()
});

/**
 * Schema for inserting new waitlist entries
 * Includes email validation
 */
export const insertWaitlistSchema = createInsertSchema(waitlist).pick({
  email: true,
}).extend({
  // Add email format validation
  email: z.string().email("Please enter a valid email address")
});

// Waitlist type definitions
export type InsertWaitlist = z.infer<typeof insertWaitlistSchema>;
export type Waitlist = typeof waitlist.$inferSelect;
