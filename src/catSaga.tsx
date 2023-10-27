import { call, put, takeEvery } from "redux-saga/effects";

import { getCatsSucess } from "./Feature/catSlice";

function* workGetCatsFetch(): any {
  const cats = yield call(() => fetch("https://api.thecatapi.com/v1/breeds"));
  const fromattedCats = yield cats.json();
  yield put(getCatsSucess(fromattedCats.slice(0 , 10)));
}

function* catSaga() {
  yield takeEvery("cats/getCatsFetch", workGetCatsFetch);
}

export default catSaga;
