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
router.get("/", getSong);
// router.get("/", getSongFilter);
router.get("/:id", getSingleSong);
router.get("/stats", getStats);
router.put("/:id", updateSong);
router.delete("/:id", deleteSong);

export default router;
