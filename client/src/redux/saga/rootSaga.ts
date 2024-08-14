import { all } from "redux-saga/effects";
import songsSaga from "./songSaga";

export default function* rootSaga() {
  yield all([songsSaga()]);
}
