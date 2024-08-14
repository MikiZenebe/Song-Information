import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
}

interface SongsState {
  songs: [];
  loading: boolean;
  error: string | null;
}

const initialState: SongsState = {
  songs: [],
  loading: false,
  error: null,
};

const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    getSongsFetch(state) {
      state.loading = true;
    },
    getSongsSuccess(state, action) {
      state.songs = action.payload;
      state.loading = false;
    },
    getSongsFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },

    addSongStart(state, action: PayloadAction<Song>) {
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
  },
});

export const {
  getSongsFetch,
  getSongsSuccess,
  getSongsFailure,
  addSongStart,
  addSongSuccess,
  addSongFailure,
} = songsSlice.actions;

export default songsSlice.reducer;
