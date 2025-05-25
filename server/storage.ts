import { users, type User, type InsertUser } from "@shared/schema";
import { waitlist, type Waitlist, type InsertWaitlist } from "@shared/schema";

/**
 * Storage interface for the application
 * 
 * Defines the contract that any storage implementation must follow.
 * This allows us to easily swap between different storage backends
 * (in-memory, database, etc.) without changing the rest of the code.
 */
export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Waitlist methods
  addToWaitlist(email: string): Promise<boolean>;
  getWaitlistEmails(): Promise<string[]>;
  isEmailInWaitlist(email: string): Promise<boolean>;
}

/**
 * In-memory storage implementation
 * 
 * This class provides a simple in-memory storage solution
 * that implements the IStorage interface. It's suitable for
 * development and testing purposes.
 */
export class MemStorage implements IStorage {
  private userMap: Map<number, User>;
  private waitlistEmails: Set<string>;
  private nextUserId: number;

  constructor() {
    // Initialize storage
    this.userMap = new Map();
    this.waitlistEmails = new Set();
    this.nextUserId = 1;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.userMap.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.userMap.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.nextUserId++;
    const user: User = { ...insertUser, id };
    this.userMap.set(id, user);
    return user;
  }
  
  // Waitlist methods
  async addToWaitlist(email: string): Promise<boolean> {
    if (this.waitlistEmails.has(email)) {
      return false; // Email already exists
    }
    
    this.waitlistEmails.add(email);
    return true;
  }
  
  async getWaitlistEmails(): Promise<string[]> {
    return Array.from(this.waitlistEmails);
  }
  
  async isEmailInWaitlist(email: string): Promise<boolean> {
    return this.waitlistEmails.has(email);
  }
}

/**
 * Create and export the storage instance
 * 
 * This is the single instance that will be used throughout the application.
 * If you need to change the storage implementation, only modify this line.
 */
export const storage = new MemStorage();
