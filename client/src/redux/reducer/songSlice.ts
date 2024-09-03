import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Song } from "../../types/SongType";

// interface Song {
//   id: string;
//   title: string;
//   artist: string;
//   album: string;
//   genre: string;
// }

interface SongsState {
  songs: Song[];
  loading: boolean;
  error: string | null;
  filters: {
    genre: string;
    artist: string;
    album: string;
  };
  artists: string[];
  genres: string[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalSongs: number;
  };
}

const initialState: SongsState = {
  songs: [] as Song[],
  loading: false,
  error: null,
  filters: {
    genre: "",
    artist: "",
    album: "",
  },
  artists: [],
  genres: [],
  pagination: {
    currentPage: 1,
    totalPages: 1,
    totalSongs: 0,
  },
};

const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    getSongsFetch(state) {
      state.loading = true;
    },
    getSongsSuccess(
      state,
      action: PayloadAction<{
        songs: Song[];
        totalPages: number;
        totalSongs: number;
        currentPage: number;
      }>
    ) {
      state.songs = action.payload.songs;
      state.loading = false;
      state.pagination = {
        currentPage: action.payload.currentPage,
        totalSongs: action.payload.totalSongs,
        totalPages: action.payload.totalPages,
      };
    },
    getSongsFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },

    addSongStart(state) {
      state.loading = true;
    },
    addSongSuccess(state, action: PayloadAction<Song>) {
      state.songs.push(action.payload);
      state.loading = false;
    },
    addSongFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },

    updateSongStart(state) {
      state.loading = true;
    },
    updateSongSuccess(state, action: PayloadAction<Song>) {
      const index = state.songs.findIndex(
        (song) => song._id === action.payload._id
      );
      if (index !== -1) {
        state.songs[index] = action.payload;
      }
      state.loading = false;
    },
    updateSongFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },

    deleteSongStart(state) {
      state.loading = true;
    },
    deleteSongSuccess(state, action: PayloadAction<string>) {
      state.songs = state.songs.filter((song) => song._id !== action.payload);
      state.loading = false;
    },
    deleteSongFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },

    setFilters(state, action: PayloadAction<Partial<SongsState["filters"]>>) {
      state.filters = { ...state.filters, ...action.payload };
      state.pagination.currentPage = 1;
    },
    setPage(state, action: PayloadAction<number>) {
      state.pagination.currentPage = action.payload;
    },

    filterSongStart(state) {
      state.loading = true;
    },
    filterSongSuccess(state, action: PayloadAction<Song[]>) {
      state.songs = action.payload;
      state.loading = false;
    },
    filterSongFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },

    setArtists(state, action: PayloadAction<string[]>) {
      state.artists = action.payload;
    },
    // Reducer to set genres
    setGenres(state, action: PayloadAction<string[]>) {
      state.genres = action.payload;
    },
  },
});

export const {
  getSongsFetch,
  getSongsSuccess,
  getSongsFailure,
  addSongStart,
  addSongSuccess,
  addSongFailure,
  updateSongStart,
  updateSongSuccess,
  updateSongFailure,
  deleteSongStart,
  deleteSongSuccess,
  deleteSongFailure,
  setFilters,
  setPage,
  filterSongStart,
  filterSongSuccess,
  filterSongFailure,
  setArtists,
  setGenres,
} = songsSlice.actions;

export default songsSlice.reducer;
