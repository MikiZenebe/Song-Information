import { call, Effect, put, takeLatest } from "redux-saga/effects";
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
} from "../reducer/songSlice";
import { addSongsUrl, getSongsUrl, songUrl } from "../../api/index";
import axios from "axios";
import { Song } from "../../types/SongType";
import { PayloadAction } from "@reduxjs/toolkit";

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

function* deleteSong(action: ReturnType<typeof deleteSongStart>) {
  const _id = action.payload;
  try {
    yield call(axios.delete, `${songUrl}/${_id}`);
    yield put(deleteSongSuccess(_id));
  } catch (error) {
    yield put(deleteSongFailure((error as Error).message));
  }
}

function* songsSaga(): Generator<Effect, void, unknown> {
  yield takeLatest(getSongsFetch.type, fetchSongs);
  yield takeLatest(addSongStart.type, addSong);
  yield takeLatest(deleteSongStart.type, deleteSong);
}

export default songsSaga;
