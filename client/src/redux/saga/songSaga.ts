import { call, Effect, put, select, takeLatest } from "redux-saga/effects";
import {
  getSongsFetch,
  getSongsSuccess,
  getSongsFailure,
  addSongStart,
  addSongSuccess,
  addSongFailure,
  deleteSongStart,
  deleteSongSuccess,
  deleteSongFailure,
  updateSongStart,
  updateSongSuccess,
  updateSongFailure,
  filterSongSuccess,
  filterSongFailure,
  filterSongStart,
  setArtists,
  setGenres,
} from "../reducer/songSlice";
import { addSongsUrl, getSongsUrl, songUrl, statUrl } from "../../api/index";
import axios from "axios";
import { Song } from "../../types/SongType";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { setStat } from "../reducer/statSlice";

function* fetchSongs(): Generator<Effect, void, unknown> {
  try {
    const response = yield call(axios.get, getSongsUrl);
    const songs = yield response.data;
    yield put(getSongsSuccess(songs));
  } catch (error) {
    yield put(getSongsFailure((error as Error).message));
  }
}
function* addSong(
  action: PayloadAction<Song>
): Generator<Effect, void, unknown> {
  try {
    const res = yield call(axios.post, addSongsUrl, action.payload);
    yield put(addSongSuccess(res.data));
  } catch (error) {
    yield put(addSongFailure((error as Error).message));
  }
}
function* updateSong(
  action: PayloadAction<Song>
): Generator<Effect, void, unknown> {
  try {
    const song = action.payload;
    const res = yield call(axios.put, `${songUrl}/${song._id}`, song);
    yield put(updateSongSuccess(res.data));
  } catch (error) {
    yield put(updateSongFailure((error as Error).message));
  }
}
function* deleteSong(action: ReturnType<typeof deleteSongStart>) {
  const _id = action.payload;
  try {
    yield call(axios.delete, `${songUrl}/${_id}`);
    yield put(deleteSongSuccess(_id));
  } catch (error) {
    yield put(deleteSongFailure((error as Error).message));
  }
}

function* filterSong(): Generator<Effect, void, unknown> {
  try {
    const { genre, artist, album } = yield select(
      (state: RootState) => state.songs.filters
    );
    const query = new URLSearchParams();

    if (genre) query.append("genre", genre);
    if (artist) query.append("artist", artist);
    if (album) query.append("album", album);

    const res = yield call(axios.get, `${songUrl}?${query.toString()}`);
    yield put(filterSongSuccess(res.data));
  } catch (error) {
    yield put(filterSongFailure((error as Error).message));
  }
}
function* fetchArtistsSaga(): Generator<Effect, void, unknown> {
  try {
    const response = yield call(axios.get, `${songUrl}/artists`);
    yield put(setArtists(response.data));
  } catch (error) {
    console.error("Failed to fetch artists", error);
  }
}
function* fetchGenresSaga(): Generator<Effect, void, unknown> {
  try {
    const response = yield call(axios.get, `${songUrl}/genres`);
    yield put(setGenres(response.data));
  } catch (error) {
    console.error("Failed to fetch genres", error);
  }
}

function* fetchStatSga(): Generator<Effect, void, unknown> {
  try {
    const res = yield call(axios.get, `${statUrl}/stats`);
    yield put(setStat(res.data));
  } catch (error) {
    console.log("Failed to fetch stats", error);
  }
}

function* songsSaga(): Generator<Effect, void, unknown> {
  yield takeLatest(getSongsFetch.type, fetchSongs);
  yield takeLatest(addSongStart.type, addSong);
  yield takeLatest(deleteSongStart.type, deleteSong);
  yield takeLatest(updateSongStart.type, updateSong);
  yield takeLatest(filterSongStart.type, filterSong);
  yield takeLatest("FETCH_ARTISTS", fetchArtistsSaga);
  yield takeLatest("FETCH_GENRES", fetchGenresSaga);
  yield takeLatest("FETCH_STATS", fetchStatSga);
}

export default songsSaga;
