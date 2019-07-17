import { put, all, call, takeLatest } from "redux-saga/effects";

//utils
import { auth } from "../../firebase";
import { CHANGE_PASSWORD } from "./constants";
import { changePasswordSuccess, changePasswordFailed } from "./actions";

function* handleChangePassword(action) {
  try {
    const { password } = action;
    const result = yield call(
      [auth.currentUser, auth.currentUser.updatePassword],
      password
    );
    yield put(changePasswordSuccess(result));
  } catch (e) {
    console.error(e);
    yield put(changePasswordFailed(e));
  }
}

function* rootSaga() {
  yield all([takeLatest(CHANGE_PASSWORD, handleChangePassword)]);
}

export default rootSaga;
