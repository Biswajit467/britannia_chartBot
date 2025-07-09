import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { analyzeTechnicalIssue, generateWelcomeMessage } from "./openai";
import { insertSupportInteractionSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Chat API routes
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, language = 'en-US' } = req.body;
      
      if (!message || typeof message !== 'string') {
        return res.status(400).json({ error: "Message is required" });
      }

      const result = await analyzeTechnicalIssue(message, language);
      
      // Log the interaction
      try {
        await storage.createSupportInteraction({
          userMessage: message,
          aiResponse: result.response,
          issueType: result.issueType,
          resolved: false,
          language
        });
      } catch (logError) {
        console.error("Failed to log interaction:", logError);
        // Continue with response even if logging fails
      }

      res.json(result);
    } catch (error) {
      console.error("Chat API error:", error);
      res.status(500).json({ 
        error: "Internal server error", 
        response: "I'm experiencing technical difficulties. Please try again or contact Developer Support at +1 991 603 9396.",
        needsEscalation: true 
      });
    }
  });

  app.get("/api/chat/welcome", async (req, res) => {
    try {
      const language = req.query.language as string || 'en-US';
      const welcomeMessage = await generateWelcomeMessage(language);
      res.json({ message: welcomeMessage });
    } catch (error) {
      console.error("Welcome message error:", error);
      res.json({ message: "Welcome to TECHASOFT Support! How can I assist you today?" });
    }
  });

  // Troubleshooting issues API
  app.get("/api/troubleshooting", async (req, res) => {
    try {
      const { type, query } = req.query;
      
      let issues;
      if (type && typeof type === 'string') {
        issues = await storage.getTroubleshootingIssuesByType(type);
      } else if (query && typeof query === 'string') {
        issues = await storage.searchTroubleshootingIssues(query);
      } else {
        issues = await storage.getAllTroubleshootingIssues();
      }
      
      res.json(issues);
    } catch (error) {
      console.error("Troubleshooting API error:", error);
      res.status(500).json({ error: "Failed to fetch troubleshooting issues" });
    }
  });

  // Maintenance schedules API
  app.get("/api/maintenance", async (req, res) => {
    try {
      const { frequency } = req.query;
      
      let schedules;
      if (frequency && typeof frequency === 'string') {
        schedules = await storage.getMaintenanceSchedulesByFrequency(frequency);
      } else {
        schedules = await storage.getAllMaintenanceSchedules();
      }
      
      res.json(schedules);
    } catch (error) {
      console.error("Maintenance API error:", error);
      res.status(500).json({ error: "Failed to fetch maintenance schedules" });
    }
  });

  // Team members API
  app.get("/api/team", async (req, res) => {
    try {
      const teamMembers = await storage.getActiveTeamMembers();
      res.json(teamMembers);
    } catch (error) {
      console.error("Team API error:", error);
      res.status(500).json({ error: "Failed to fetch team members" });
    }
  });

  // Support interaction resolution
  app.post("/api/chat/resolve", async (req, res) => {
    try {
      const { interactionId, resolved } = req.body;
      
      if (!interactionId || typeof resolved !== 'boolean') {
        return res.status(400).json({ error: "Invalid request data" });
      }

      // Note: We'll need to add an update method to storage interface for this
      res.json({ success: true });
    } catch (error) {
      console.error("Resolution API error:", error);
      res.status(500).json({ error: "Failed to update resolution status" });
    }
  });

  // System status endpoint
  app.get("/api/status", async (req, res) => {
    try {
      // Return mock system status - in production this would connect to actual system monitoring
      res.json({
        detectionAccuracy: 99.2,
        systemStatus: "online",
        responseTime: "1.2ms",
        support: "24/7",
        lineEfficiency: 94,
        lastUpdated: new Date().toISOString()
      });
    } catch (error) {
      console.error("Status API error:", error);
      res.status(500).json({ error: "Failed to fetch system status" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
