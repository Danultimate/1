import { put, all, call, takeLatest } from "redux-saga/effects";
import * as routes from "../../utils/routes";
import { push } from "react-router-redux";

//utils
import { auth } from "../../firebase";
import { SIGN_OUT } from "./constants";
import { signOutSuccess, signOutFailed } from "./actions";

function* handleSignOut() {
  try {
    yield call([auth, auth.signOut]);
    yield put(signOutSuccess());
    yield put(push(routes.SIGN_IN));
  } catch (e) {
    yield put(signOutFailed(e));
  }
}

function* rootSaga() {
  yield all([takeLatest(SIGN_OUT, handleSignOut)]);
}

export default rootSaga;
