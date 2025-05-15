import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

//Route files
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import classRoutes from "./routes/classRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
dotenv.config();
const app = express();
const PORT = 4000;

app.use(cors({ origin: "http://localhost:5173" }));
mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("MongoDB Connection failed", err));

app.use(express.json());
app.use("/user", userRoutes);
app.use("/auth", authRoutes);
app.use("/class", classRoutes);
app.use("/task", taskRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
