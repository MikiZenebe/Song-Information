import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./db/connectDB.js";

const app = express();
dotenv.config();

app.listen(5000, () => {
  console.log("Server is running");
  connectDB();
});
