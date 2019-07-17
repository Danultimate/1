import { put, all, call, takeLatest } from "redux-saga/effects";

//utils
import { db, auth } from "../../firebase";
import { CREATE_USER } from "./constants";
import { createUserSuccess, createUserFailed } from "./actions";

function* handleCreateUser(action) {
  try {
    const { email, username, password } = action;

    //create user in auth firebase
    const authUser = yield call(
      [auth, auth.createUserWithEmailAndPassword],
      email,
      password
    );

    //create user in db
    const ref = db.ref(`users/${authUser.id}`);
    yield call([ref, ref.set], {
      username,
      email
    });

    //send email verification
    const actionCodeSettings = {
      url: process.env.REACT_APP_REDIRECT_EMAIL_CONFIRMATION
    };
    yield call(
      [auth.currentUser, auth.currentUser.sendEmailVerification],
      actionCodeSettings
    );
    yield put(createUserSuccess());
  } catch (e) {
    console.log("error", e);
    yield put(createUserFailed(e));
  }
}

function* rootSaga() {
  yield all([takeLatest(CREATE_USER, handleCreateUser)]);
}

export default rootSaga;
