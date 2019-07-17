import { put, all, call, takeLatest } from "redux-saga/effects";

//utils
import { auth } from "../../firebase";
import { RESET_PASSWORD } from "./constants";
import { resetPasswordSuccess, resetPasswordFailed } from "./actions";

function* handleResetPassword(action) {
  try {
    const { email } = action;
    const result = yield call([auth, auth.sendPasswordResetEmail], email);
    yield put(resetPasswordSuccess(result));
  } catch (e) {
    console.error(e);
    yield put(resetPasswordFailed(e));
  }
}

function* rootSaga() {
  yield all([takeLatest(RESET_PASSWORD, handleResetPassword)]);
}

export default rootSaga;
