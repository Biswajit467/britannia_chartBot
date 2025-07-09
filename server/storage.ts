import { 
  users, 
  troubleshootingIssues,
  supportInteractions,
  maintenanceSchedules,
  teamMembers,
  type User, 
  type InsertUser,
  type TroubleshootingIssue,
  type InsertTroubleshootingIssue,
  type SupportInteraction,
  type InsertSupportInteraction,
  type MaintenanceSchedule,
  type InsertMaintenanceSchedule,
  type TeamMember,
  type InsertTeamMember
} from "@shared/schema";
import { db } from "./db";
import { eq, ilike, or } from "drizzle-orm";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Troubleshooting methods
  getAllTroubleshootingIssues(): Promise<TroubleshootingIssue[]>;
  getTroubleshootingIssuesByType(type: string): Promise<TroubleshootingIssue[]>;
  searchTroubleshootingIssues(query: string): Promise<TroubleshootingIssue[]>;
  createTroubleshootingIssue(issue: InsertTroubleshootingIssue): Promise<TroubleshootingIssue>;
  
  // Support interaction methods
  createSupportInteraction(interaction: InsertSupportInteraction): Promise<SupportInteraction>;
  getSupportInteractionsByType(issueType: string): Promise<SupportInteraction[]>;
  
  // Maintenance methods
  getAllMaintenanceSchedules(): Promise<MaintenanceSchedule[]>;
  getMaintenanceSchedulesByFrequency(frequency: string): Promise<MaintenanceSchedule[]>;
  createMaintenanceSchedule(schedule: InsertMaintenanceSchedule): Promise<MaintenanceSchedule>;
  
  // Team member methods
  getAllTeamMembers(): Promise<TeamMember[]>;
  getActiveTeamMembers(): Promise<TeamMember[]>;
  createTeamMember(member: InsertTeamMember): Promise<TeamMember>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async getAllTroubleshootingIssues(): Promise<TroubleshootingIssue[]> {
    return await db.select().from(troubleshootingIssues);
  }

  async getTroubleshootingIssuesByType(type: string): Promise<TroubleshootingIssue[]> {
    return await db.select().from(troubleshootingIssues).where(eq(troubleshootingIssues.type, type));
  }

  async searchTroubleshootingIssues(query: string): Promise<TroubleshootingIssue[]> {
    return await db.select().from(troubleshootingIssues).where(
      or(
        ilike(troubleshootingIssues.title, `%${query}%`),
        ilike(troubleshootingIssues.description, `%${query}%`)
      )
    );
  }

  async createTroubleshootingIssue(issue: InsertTroubleshootingIssue): Promise<TroubleshootingIssue> {
    const [createdIssue] = await db
      .insert(troubleshootingIssues)
      .values({
        type: issue.type,
        title: issue.title,
        description: issue.description,
        steps: issue.steps,
        keywords: issue.keywords
      })
      .returning();
    return createdIssue;
  }

  async createSupportInteraction(interaction: InsertSupportInteraction): Promise<SupportInteraction> {
    const [createdInteraction] = await db
      .insert(supportInteractions)
      .values(interaction)
      .returning();
    return createdInteraction;
  }

  async getSupportInteractionsByType(issueType: string): Promise<SupportInteraction[]> {
    return await db.select().from(supportInteractions).where(eq(supportInteractions.issueType, issueType));
  }

  async getAllMaintenanceSchedules(): Promise<MaintenanceSchedule[]> {
    return await db.select().from(maintenanceSchedules);
  }

  async getMaintenanceSchedulesByFrequency(frequency: string): Promise<MaintenanceSchedule[]> {
    return await db.select().from(maintenanceSchedules).where(eq(maintenanceSchedules.frequency, frequency));
  }

  async createMaintenanceSchedule(schedule: InsertMaintenanceSchedule): Promise<MaintenanceSchedule> {
    const [createdSchedule] = await db
      .insert(maintenanceSchedules)
      .values({
        title: schedule.title,
        description: schedule.description,
        frequency: schedule.frequency,
        priority: schedule.priority,
        steps: schedule.steps,
        estimatedDuration: schedule.estimatedDuration
      })
      .returning();
    return createdSchedule;
  }

  async getAllTeamMembers(): Promise<TeamMember[]> {
    return await db.select().from(teamMembers);
  }

  async getActiveTeamMembers(): Promise<TeamMember[]> {
    return await db.select().from(teamMembers).where(eq(teamMembers.isActive, true));
  }

  async createTeamMember(member: InsertTeamMember): Promise<TeamMember> {
    const [createdMember] = await db
      .insert(teamMembers)
      .values({
        name: member.name,
        role: member.role,
        phone: member.phone,
        email: member.email,
        languages: member.languages,
        specialties: member.specialties,
        isActive: member.isActive
      })
      .returning();
    return createdMember;
  }
}

export const storage = new DatabaseStorage();
