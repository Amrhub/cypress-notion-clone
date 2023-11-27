import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import * as dotenv from 'dotenv';
import * as schema from '../../../migrations/schema';
dotenv.config({ path: '.env' });

if (!process.env.DATABASE_URL) {
  console.error('🔴 Cannot find database URL');
}

const client = postgres(process.env.DATABASE_URL as string, { max: 1 });
const db = drizzle(client, { schema });

const migrateDb = async () => {
  try {
    console.log('🟠 Migrating client');
    await migrate(db, { migrationsFolder: 'migrations' });
  } catch (error) {
    console.error('🔴 Error migrating client', error);
  }
};
// Uncomment to run migrations
// ! it will run migrations every time you call db.ts
// migrateDb();
export default db;
