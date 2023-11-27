import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';
import { StatsFs } from 'fs';
dotenv.config({ path: '.env' });

if (!process.env.DATABASE_URL) {
  console.error('🔴 Cannot find database URL');
}

export default {
  schema: './src/lib/supabase/schema.ts',
  out: './migrations',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL ?? '',
  },
} satisfies Config;
