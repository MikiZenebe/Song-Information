import express from "express";
import {
  addSong,
  deleteSong,
  getSong,
  updateSong,
} from "../controllers/songController.js";

const router = express.Router();

router.post("/addSong", addSong);
router.get("/allSongs", getSong);
router.put("/updateSong/:id", updateSong);
router.delete("/deleteSong/:id", deleteSong);

export default router;
