import { call, Effect, put, takeLatest } from "redux-saga/effects";
import {
  getSongsFetch,
  getSongsSuccess,
  getSongsFailure,
  addSongStart,
  addSongSuccess,
  addSongFailure,
} from "../reducer/songSlice";
import { addSongsUrl, getSongsUrl } from "../../api/index";
import axios from "axios";

function* fetchSongs(): Generator<Effect, void, unknown> {
  try {
    const response = yield call(axios.get, getSongsUrl);
    const songs = yield response.data;
    yield put(getSongsSuccess(songs));
  } catch (error) {
    yield put(getSongsFailure((error as Error).message));
  }
}

function* addSong(action: any): Generator<Effect, void, unknown> {
  try {
    const res = yield call(axios.post, addSongsUrl, action.payload);
    yield put(addSongSuccess(res.data));
  } catch (error) {
    yield put(addSongFailure((error as Error).message));
  }
}

function* songsSaga(): Generator<Effect, void, unknown> {
  yield takeLatest(getSongsFetch.type, fetchSongs);
  yield takeLatest(addSongStart.type, addSong);
}

export default songsSaga;
