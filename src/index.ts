import { Elysia } from "elysia";
import { db } from "./db";

const port = process.env.PORT || 3000;

const app = new Elysia()
  .get("/", () => {
    return {
      status: "ok",
      message: "Hello World from Elysia + Bun!",
    };
  })
  .get("/users", async () => {
    try {
      const allUsers = await db.query.users.findMany();
      return { success: true, data: allUsers };
    } catch (error: any) {
      return {
        success: false,
        message: "Database connection configured, but query failed (check if MySQL is running and tables are migrated).",
        error: error.message,
      };
    }
  })
  .listen(port);

console.log(`🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`);
