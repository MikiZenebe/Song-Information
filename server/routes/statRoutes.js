import express from "express";
import { getStatsOfSongs } from "../controllers/songController.js";

const router = express.Router();

router.get("/stats", getStatsOfSongs);

export default router;
