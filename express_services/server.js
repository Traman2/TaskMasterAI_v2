import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import { createServer } from "node:http";
import { Server } from "socket.io";

//Route files
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import classRoutes from "./routes/classRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import resourceRoutes from "./routes/resourceRoutes.js";
import flashCardRoutes from "./routes/flashCardRoutes.js";

dotenv.config();
const app = express();
const PORT = 4000;

app.use(cors({ origin: "http://localhost:5173" }));
mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("MongoDB Connection failed", err));

//Messages model from mongodb
import messags from "./models/messages.js"

//Socket.io RTT code
const http = createServer(app);
const io = new Server(http, {
  cors: { orgin: "*" },
});

const messages = [];

io.on("connection", (socket) => {
  console.log(`user connected: ${socket.id}`);

  socket.emit("history", messages);

  socket.on("message", ({ name, message }) => {
    console.log(`[${name}] ${message}`);

    const entry = { id: socket.id, name, message, ts: Date.now() };
    messages.push(entry);

    io.emit("message", entry);
  });

  socket.on("disconnect", () => {
    console.log(`user disconnected: ${socket.id}`);
  });
});

app.use(express.json());
app.use("/user", userRoutes);
app.use("/auth", authRoutes);
app.use("/class", classRoutes);
app.use("/task", taskRoutes);
app.use("/resources", resourceRoutes);
app.use("/flashcard", flashCardRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

http.listen(3000, () => {
  console.log("RTT server running at http://localhost:3000");
});
