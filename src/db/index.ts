import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as schema from "./schema";

const connectionUrl = process.env.DATABASE_URL || "mysql://root:password@127.0.0.1:3306/vibecoding_db";

export const connection = mysql.createPool(connectionUrl);

export const db = drizzle({ client: connection, schema, mode: "default" });
