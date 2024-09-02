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
  const { page = 1, genre, artist, album } = req.query;
  const limit = 5;
  const skip = (page - 1) * limit;
  try {
    const filter = {};

    if (genre) filter.genre = genre;
    if (artist) filter.artist = artist;
    if (album) filter.album = album;

    const songs = await Song.find(filter).skip(skip).limit(limit);
    const totalSongs = await Song.countDocuments(filter);

    res
      .status(200)
      .json({
        songs,
        totalSongs,
        totalPages: Math.ceil(totalSongs / limit),
        currentPage: Number(page),
      });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const filterByArtists = async (req, res) => {
  try {
    const artists = await Song.distinct("artist"); // Get unique artist names
    res.json(artists);
  } catch (error) {
    res.status(500).json({ message: "Error fetching artists" });
  }
};

export const filterByGenres = async (req, res) => {
  try {
    const genres = await Song.distinct("genre"); // Get unique genres
    res.json(genres);
  } catch (error) {
    res.status(500).json({ message: "Error fetching genres" });
  }
};

export const getSingleSong = async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    if (!song) {
      return res.status(400).json({ message: "Song not found" });
    }
    res.json(song);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
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

export const getStatsOfSongs = async (req, res) => {
  try {
    //Aggregation pipeline for stat
    const stat = await Song.aggregate([
      //fields to calc totals
      {
        $group: {
          _id: null,
          totalSongs: { $sum: 1 },
          totalArtists: {
            $addToSet: "$artist",
          },
          totalAlbums: {
            $addToSet: "$album",
          },
          totalGenres: {
            $addToSet: "$genre",
          },
        },
      },

      //arrays to calc distinct counts
      {
        $project: {
          totalSongs: 1,
          totalArtists: { $size: "$totalArtists" },
          totalAlbums: { $size: "$totalAlbums" },
          totalGenres: { $size: "$totalGenres" },
        },
      },
    ]);

    //Aggergation pipeline for genres and songs count
    const genreStats = await Song.aggregate([
      {
        $group: {
          _id: "$genre",
          songsInGenre: { $sum: 1 },
        },
      },
    ]);

    //Aggergation pipeline for artists, songs and albums count
    const artistStats = await Song.aggregate([
      {
        $group: {
          _id: "$artist",
          songsCount: { $sum: 1 },
          albums: {
            $addToSet: "$album",
          },
        },
      },
      {
        $project: {
          songsCount: 1,
          albumsCount: { $size: "$albums" },
        },
      },
    ]);

    //Aggergation pipeline for songs and albums count
    const albumStats = await Song.aggregate([
      {
        $group: {
          _id: "$album",
          songsInAlbum: {
            $sum: 1,
          },
        },
      },
    ]);

    res.json({
      overall: stat[0] || {},
      genreStats,
      artistStats,
      albumStats,
    });
  } catch (error) {
    console.log("Error fetching stat", error);
    res.status(500).json({ message: "Error fetching stat" });
  }
};
