import express from "express";
import {
  addSong,
  deleteSong,
  filterByArtists,
  filterByGenres,
  getSingleSong,
  getSong,
  getStats,
  updateSong,
} from "../controllers/songController.js";

const router = express.Router();

router.post("/addSong", addSong);
router.get("/", getSong);
router.get("/artists", filterByArtists);
router.get("/genres", filterByGenres);
router.get("/:id", getSingleSong);
router.get("/stats", getStats);
router.put("/:id", updateSong);
router.delete("/:id", deleteSong);

export default router;
