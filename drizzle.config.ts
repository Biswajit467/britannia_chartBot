// import { defineConfig } from "drizzle-kit";

// if (!process.env.DATABASE_URL) {
//   throw new Error("DATABASE_URL, ensure the database is provisioned");
// }

// export default defineConfig({
//   out: "./migrations",
//   schema: "./shared/schema.ts",
//   dialect: "postgresql",
//   dbCredentials: {
//     url: process.env.DATABASE_URL,
//   },
// });

// import { defineConfig } from "drizzle-kit";
// import 'dotenv/config';

// if (!process.env.DATABASE_URL) {
//   throw new Error("DATABASE_URL, ensure the database is provisioned");
// }

// export default defineConfig({
//   out: "./migrations",
//   schema: "./shared/schema.ts",
//   dialect: "mysql", // 👈 changed from postgresql
//   dbCredentials: {
//     url: process.env.DATABASE_URL,
//   },
// });

import "dotenv/config";
import { config } from "dotenv";
config();
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./shared/schema.ts",
  out: "./drizzle/migrations",
  dialect: "mysql", // ✅ This is the NEW REQUIRED FIELD (was 'driver')
  dbCredentials: {
    host: process.env.DB_HOST!,
    port: Number(process.env.DB_PORT || "3306"),
    user: process.env.DB_USER!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_NAME!,
  },
});
