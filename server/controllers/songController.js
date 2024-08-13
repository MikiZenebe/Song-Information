import Song from "../models/songModel.js";

export const addSong = async (req, res) => {
  const { title, artist, album, genre } = req?.body;

  try {
    const newSong = new Song({ title, artist, album, genre });
    await newSong.save();
    res.status(200).json(newSong);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getSong = async (req, res) => {
  try {
    const songs = await Song.find({});
    res.status(200).json(songs);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateSong = async (req, res) => {
  const { title, artist, album, genre } = req.body;
  try {
    const song = await Song.findById(req.params.id);
    if (song) {
      song.title = title;
      song.artist = artist;
      song.album = album;
      song.genre = genre;

      await song.save();
      res.status(200).json(song);
    } else {
      res.status(404).json({ message: "Song not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteSong = async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    if (song) {
      await song.deleteOne();
      res.status(204).json({ message: "Song removed" });
    } else {
      res.status(404).json({ message: "Song not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getStats = async (req, res) => {
  try {
    const totalSongs = await Song.countDocuments();
    const totalArtists = await Song.distinct("artist").length;
    const totalAlbums = await Song.distinct("album").length;
    const totalGenres = await Song.distinct("genre").legth;

    const songsByGenre = await Song.aggregate([
      { $group: { _id: "$genre", count: { $sum: 1 } } },
    ]);

    const songsByArtist = await Song.aggregate([
      {
        $group: {
          _id: "$artist",
          count: { $sum: 1 },
          albums: { $addToSet: "$album" },
        },
      },
    ]);

    const stats = {
      totalSongs,
      totalArtists,
      totalAlbums,
      totalGenres,
      songsByGenre,
      songsByArtist,
    };

    res.status(200).json(stats);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
