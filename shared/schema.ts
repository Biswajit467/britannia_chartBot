// import {
//   pgTable,
//   text,
//   serial,
//   integer,
//   boolean,
//   timestamp,
//   jsonb,
//   mysqlTable,
//   varchar,
//   int,
// } from "drizzle-orm/pg-core";
// import { createInsertSchema } from "drizzle-zod";
// import { z } from "zod";

// export const users = pgTable("users", {
//   id: serial("id").primaryKey(),
//   username: text("username").notNull().unique(),
//   password: text("password").notNull(),
// });

// export const troubleshootingIssues = pgTable("troubleshooting_issues", {
//   id: serial("id").primaryKey(),
//   type: text("type").notNull(), // 'camera', 'plc', 'runtime'
//   title: text("title").notNull(),
//   description: text("description"),
//   steps: jsonb("steps").$type<string[]>().notNull(),
//   keywords: jsonb("keywords").$type<string[]>().notNull(),
//   createdAt: timestamp("created_at").defaultNow(),
// });

// export const supportInteractions = pgTable("support_interactions", {
//   id: serial("id").primaryKey(),
//   userMessage: text("user_message").notNull(),
//   aiResponse: text("ai_response").notNull(),
//   issueType: text("issue_type"),
//   resolved: boolean("resolved").default(false),
//   language: text("language").default("en-US"),
//   createdAt: timestamp("created_at").defaultNow(),
// });

// export const maintenanceSchedules = pgTable("maintenance_schedules", {
//   id: serial("id").primaryKey(),
//   title: text("title").notNull(),
//   description: text("description"),
//   frequency: text("frequency").notNull(), // 'daily', 'weekly', 'monthly', 'quarterly'
//   priority: text("priority").notNull(), // 'low', 'medium', 'high', 'critical'
//   steps: jsonb("steps").$type<string[]>().notNull(),
//   estimatedDuration: integer("estimated_duration"), // in minutes
//   createdAt: timestamp("created_at").defaultNow(),
// });

// export const teamMembers = pgTable("team_members", {
//   id: serial("id").primaryKey(),
//   name: text("name").notNull(),
//   role: text("role").notNull(),
//   phone: text("phone").notNull(),
//   email: text("email"),
//   languages: jsonb("languages").$type<string[]>().notNull(),
//   specialties: jsonb("specialties").$type<string[]>().notNull(),
//   isActive: boolean("is_active").default(true),
//   createdAt: timestamp("created_at").defaultNow(),
// });

// export const insertUserSchema = createInsertSchema(users).pick({
//   username: true,
//   password: true,
// });

// export const insertTroubleshootingIssueSchema = createInsertSchema(
//   troubleshootingIssues
// ).omit({
//   id: true,
//   createdAt: true,
// });

// export const insertSupportInteractionSchema = createInsertSchema(
//   supportInteractions
// ).omit({
//   id: true,
//   createdAt: true,
// });

// export const insertMaintenanceScheduleSchema = createInsertSchema(
//   maintenanceSchedules
// ).omit({
//   id: true,
//   createdAt: true,
// });

// export const insertTeamMemberSchema = createInsertSchema(teamMembers).omit({
//   id: true,
//   createdAt: true,
// });

// export type InsertUser = z.infer<typeof insertUserSchema>;
// export type User = typeof users.$inferSelect;
// export type TroubleshootingIssue = typeof troubleshootingIssues.$inferSelect;
// export type InsertTroubleshootingIssue = z.infer<
//   typeof insertTroubleshootingIssueSchema
// >;
// export type SupportInteraction = typeof supportInteractions.$inferSelect;
// export type InsertSupportInteraction = z.infer<
//   typeof insertSupportInteractionSchema
// >;
// export type MaintenanceSchedule = typeof maintenanceSchedules.$inferSelect;
// export type InsertMaintenanceSchedule = z.infer<
//   typeof insertMaintenanceScheduleSchema
// >;
// export type TeamMember = typeof teamMembers.$inferSelect;
// export type InsertTeamMember = z.infer<typeof insertTeamMemberSchema>;

import {
  mysqlTable,
  varchar,
  int,
  boolean,
  datetime,
  serial,
  json,
} from "drizzle-orm/mysql-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { sql } from "drizzle-orm";

export const users = mysqlTable("users", {
  id: serial("id").primaryKey(),
  username: varchar("username", { length: 255 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull(),
});

export const troubleshootingIssues = mysqlTable("troubleshooting_issues", {
  id: serial("id").primaryKey(),
  type: varchar("type", { length: 255 }).notNull(), // 'camera', 'plc', 'runtime'
  title: varchar("title", { length: 255 }).notNull(),
  description: varchar("description", { length: 1024 }),
  steps: json("steps").notNull(), // MySQL supports native JSON
  keywords: json("keywords").notNull(),
  // createdAt: datetime("created_at", { mode: "date" }).defaultNow(),
  createdAt: datetime("created_at", { mode: "date" }).default(
    sql`CURRENT_TIMESTAMP`
  ),
});

export const supportInteractions = mysqlTable("support_interactions", {
  id: serial("id").primaryKey(),
  userMessage: varchar("user_message", { length: 1024 }).notNull(),
  aiResponse: varchar("ai_response", { length: 2048 }).notNull(),
  issueType: varchar("issue_type", { length: 255 }),
  resolved: boolean("resolved").default(false),
  language: varchar("language", { length: 10 }).default("en-US"),
  // createdAt: datetime("created_at", { mode: "date" }).defaultNow(),
  createdAt: datetime("created_at", { mode: "date" }).default(
    sql`CURRENT_TIMESTAMP`
  ),
});

export const maintenanceSchedules = mysqlTable("maintenance_schedules", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: varchar("description", { length: 1024 }),
  frequency: varchar("frequency", { length: 255 }).notNull(),
  priority: varchar("priority", { length: 255 }).notNull(),
  steps: json("steps").notNull(),
  estimatedDuration: int("estimated_duration"),
  // createdAt: datetime("created_at", { mode: "date" }).defaultNow(),
  createdAt: datetime("created_at", { mode: "date" }).default(
    sql`CURRENT_TIMESTAMP`
  ),
});

export const teamMembers = mysqlTable("team_members", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  role: varchar("role", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 15 }).notNull(),
  email: varchar("email", { length: 255 }),
  languages: json("languages").notNull(),
  specialties: json("specialties").notNull(),
  isActive: boolean("is_active").default(true),
  // createdAt: datetime("created_at", { mode: "date" }).defaultNow(),
  createdAt: datetime("created_at", { mode: "date" }).default(
    sql`CURRENT_TIMESTAMP`
  ),
});

// Zod Insert Schemas
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertTroubleshootingIssueSchema = createInsertSchema(
  troubleshootingIssues
).omit({
  id: true,
  createdAt: true,
});

export const insertSupportInteractionSchema = createInsertSchema(
  supportInteractions
).omit({
  id: true,
  createdAt: true,
});

export const insertMaintenanceScheduleSchema = createInsertSchema(
  maintenanceSchedules
).omit({
  id: true,
  createdAt: true,
});

export const insertTeamMemberSchema = createInsertSchema(teamMembers).omit({
  id: true,
  createdAt: true,
});

// Types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type TroubleshootingIssue = typeof troubleshootingIssues.$inferSelect;
export type InsertTroubleshootingIssue = z.infer<
  typeof insertTroubleshootingIssueSchema
>;
export type SupportInteraction = typeof supportInteractions.$inferSelect;
export type InsertSupportInteraction = z.infer<
  typeof insertSupportInteractionSchema
>;
export type MaintenanceSchedule = typeof maintenanceSchedules.$inferSelect;
export type InsertMaintenanceSchedule = z.infer<
  typeof insertMaintenanceScheduleSchema
>;
export type TeamMember = typeof teamMembers.$inferSelect;
export type InsertTeamMember = z.infer<typeof insertTeamMemberSchema>;
