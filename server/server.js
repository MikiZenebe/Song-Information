import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db/connectDB.js";
import songRoutes from "./routes/songRoutes.js";
import statRoutes from "./routes/statRoutes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" })); // to parse req.body

app.use("/api/song", songRoutes);
app.use("/api/statistics", statRoutes);

app.listen(5000, () => {
  console.log("Server is running");
  connectDB();
});
