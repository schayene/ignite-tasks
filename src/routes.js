import { randomUUID } from "node:crypto";
import { Database } from "./database.js";

const database = new Database();

export const routes = [
  {
    method: "GET",
    path: "/tasks",
    handler: (request, response) => {
      const tasks = database.select("tasks");

      return response.end(JSON.stringify(tasks));
    },
  },
  {
    method: "POST",
    path: "/tasks",
    handler: (request, response) => {
      const { title, description } = request.body;

      database.insert("tasks", {
        id: randomUUID(),
        completed_at: null,
        created_at: new Date(),
        updated_at: null,
        title,
        description,
      });

      return response.writeHead(201).end();
    },
  },
];
