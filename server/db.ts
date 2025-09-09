// import { Pool, neonConfig } from "@neondatabase/serverless";
// import "dotenv/config";
// import { drizzle } from "drizzle-orm/neon-serverless";
// import ws from "ws";
// import * as schema from "@shared/schema";

// neonConfig.webSocketConstructor = ws;

// if (!process.env.DATABASE_URL) {
//   throw new Error(
//     "DATABASE_URL must be set. Did you forget to provision a database?"
//   );
// }

// export const pool = new Pool({ connectionString: process.env.DATABASE_URL });
// export const db = drizzle({ client: pool, schema });

import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as schema from "@shared/schema";
import "dotenv/config";

const pool = mysql.createPool({
  uri: process.env.DATABASE_URL,
});
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL must be set in .env");
}

const connection = await mysql.createConnection(process.env.DATABASE_URL);
// export const db = drizzle(connection, { schema });
export const db = drizzle(pool, { schema, mode: "default" });
