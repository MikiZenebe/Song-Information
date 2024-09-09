import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StatState {
  overall: {
    totalSongs: number;
    totalArtists: number;
    totalAlbums: number;
    totalGenres: number;
  };
  genreStats: Array<{ _id: string; songsInGenre: number }>;
  artistStats: Array<{ _id: string; songsCount: number; albumsCount: number }>;
  albumStats: Array<{ _id: string; songsInAlbum: number }>;
}
const initialState: StatState = {
  overall: {
    totalSongs: 0,
    totalArtists: 0,
    totalAlbums: 0,
    totalGenres: 0,
  },
  genreStats: [],
  artistStats: [],
  albumStats: [],
};

const statSlice = createSlice({
  name: "stat",
  initialState,
  reducers: {
    // Reducer to set stats
    setStat(_state, action: PayloadAction<StatState>) {
      return action.payload;
    },
  },
});

export const { setStat } = statSlice.actions;

export default statSlice.reducer;
