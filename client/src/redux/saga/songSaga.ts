import { call, Effect, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  getSongsFetch,
  getSongsSuccess,
  getSongsFailure,
  addSongStart,
  addSongSuccess,
  addSongFailure,
} from "../reducer/songSlice";
import { getSongsUrl } from "../../api/index";

function* fetchSongs(): Generator<Effect, void, unknown> {
  try {
    const response = yield call(() => getSongsUrl);
    const songs = yield response.json();
    yield put(getSongsSuccess(songs));
  } catch (error) {
    yield put(getSongsFailure((error as Error).message));
  }
}

function* songsSaga(): Generator<Effect, void, unknown> {
  yield takeLatest(getSongsFetch.type, fetchSongs);
}

export default songsSaga;
