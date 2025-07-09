import { pgTable, text, serial, integer, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const troubleshootingIssues = pgTable("troubleshooting_issues", {
  id: serial("id").primaryKey(),
  type: text("type").notNull(), // 'camera', 'plc', 'runtime'
  title: text("title").notNull(),
  description: text("description"),
  steps: jsonb("steps").$type<string[]>().notNull(),
  keywords: jsonb("keywords").$type<string[]>().notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const supportInteractions = pgTable("support_interactions", {
  id: serial("id").primaryKey(),
  userMessage: text("user_message").notNull(),
  aiResponse: text("ai_response").notNull(),
  issueType: text("issue_type"),
  resolved: boolean("resolved").default(false),
  language: text("language").default('en-US'),
  createdAt: timestamp("created_at").defaultNow(),
});

export const maintenanceSchedules = pgTable("maintenance_schedules", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  frequency: text("frequency").notNull(), // 'daily', 'weekly', 'monthly', 'quarterly'
  priority: text("priority").notNull(), // 'low', 'medium', 'high', 'critical'
  steps: jsonb("steps").$type<string[]>().notNull(),
  estimatedDuration: integer("estimated_duration"), // in minutes
  createdAt: timestamp("created_at").defaultNow(),
});

export const teamMembers = pgTable("team_members", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  role: text("role").notNull(),
  phone: text("phone").notNull(),
  email: text("email"),
  languages: jsonb("languages").$type<string[]>().notNull(),
  specialties: jsonb("specialties").$type<string[]>().notNull(),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertTroubleshootingIssueSchema = createInsertSchema(troubleshootingIssues).omit({
  id: true,
  createdAt: true,
});

export const insertSupportInteractionSchema = createInsertSchema(supportInteractions).omit({
  id: true,
  createdAt: true,
});

export const insertMaintenanceScheduleSchema = createInsertSchema(maintenanceSchedules).omit({
  id: true,
  createdAt: true,
});

export const insertTeamMemberSchema = createInsertSchema(teamMembers).omit({
  id: true,
  createdAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type TroubleshootingIssue = typeof troubleshootingIssues.$inferSelect;
export type InsertTroubleshootingIssue = z.infer<typeof insertTroubleshootingIssueSchema>;
export type SupportInteraction = typeof supportInteractions.$inferSelect;
export type InsertSupportInteraction = z.infer<typeof insertSupportInteractionSchema>;
export type MaintenanceSchedule = typeof maintenanceSchedules.$inferSelect;
export type InsertMaintenanceSchedule = z.infer<typeof insertMaintenanceScheduleSchema>;
export type TeamMember = typeof teamMembers.$inferSelect;
export type InsertTeamMember = z.infer<typeof insertTeamMemberSchema>;
