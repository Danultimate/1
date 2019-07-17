import { all, fork } from "redux-saga/effects";
import signInSaga from "./../containers/SignIn/saga";
import navigationSaga from "./../containers/Navigation/saga";
import signUpSaga from "./../containers/SignUp/saga";
import resetPasswordSaga from "./../containers/ResetPassword/saga";
import changePasswordSaga from "./../containers/Account/saga";
import appSaga from "./../containers/App/saga";

export default function* rootSaga() {
  yield all([
    fork(signInSaga),
    fork(navigationSaga),
    fork(appSaga),
    fork(signUpSaga),
    fork(resetPasswordSaga),
    fork(changePasswordSaga)
  ]);
}
