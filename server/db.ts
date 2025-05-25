import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import * as schema from "@shared/schema";
import ws from 'ws';

/**
 * Database connection setup for Neon PostgreSQL
 * 
 * This module configures and exports the database connection
 * using Drizzle ORM with Neon Serverless Postgres.
 */

// Configure WebSocket for Neon Serverless
neonConfig.webSocketConstructor = ws;

// Verify database connection string exists
if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL environment variable must be set. Please provision a database."
  );
}

// Connection pool configuration
const connectionConfig = {
  connectionString: process.env.DATABASE_URL,
  // Add connection pool settings as needed
  max: 10, // maximum number of clients
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};

// Create and export the connection pool
export const pool = new Pool(connectionConfig);

// Create and export the Drizzle ORM instance
export const db = drizzle(pool, { schema });

// Attach an error handler to the pool for monitoring
pool.on('error', (err) => {
  console.error('Unexpected database pool error:', err);
});