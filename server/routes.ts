import { Express } from "express";
import { setupAuth, createDefaultUser } from "./auth";

export function registerRoutes(app: Express) {
  // Create default admin user
  createDefaultUser();
  
  // Setup authentication routes
  setupAuth(app);
}
