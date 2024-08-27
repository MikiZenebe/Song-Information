import express from "express";
import {
  addSong,
  deleteSong,
  getSingleSong,
  getSong,
  getStats,
  updateSong,
} from "../controllers/songController.js";

const router = express.Router();

router.post("/addSong", addSong);
router.get("/allSongs", getSong);
router.get("/:id", getSingleSong);
router.get("/stats", getStats);
router.put("/updateSong/:id", updateSong);
router.delete("/deleteSong/:id", deleteSong);

export default router;
