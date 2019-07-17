import { put, all, call, takeLatest } from "redux-saga/effects";
import * as routes from "../../utils/routes";
import { push } from "react-router-redux";

//utils
import firebase, { auth } from "../../firebase";
import {
  SIGN_IN,
  SIGN_IN_WITH_GOOGLE,
  SIGN_IN_WITH_FACEBOOK,
  SIGN_IN_WITH_TWITTER
} from "./constants";
import {
  signInSuccess,
  signInFailed,
  signInWithGoogleSuccess,
  signInWithGoogleFailed,
  signInWithFacebookSuccess,
  signInWithFacebookFailed,
  signInWithTwitterSuccess,
  signInWithTwitterFailed
} from "./actions";

function* handleSignIn(action) {
  try {
    const { email, password } = action;
    const result = yield call(
      [auth, auth.signInWithEmailAndPassword],
      email,
      password
    );
    yield put(signInSuccess(result.user));
    yield put(push(routes.HOME));
  } catch (e) {
    yield put(signInFailed(e));
  }
}

function* handleSignInWithGoogle() {
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = yield call([auth, auth.signInWithPopup], provider);
    yield put(signInWithGoogleSuccess(result.user));
  } catch (e) {
    yield put(signInWithGoogleFailed(e));
  }
}

function* handleSignInWithFacebook() {
  try {
    const provider = new firebase.auth.FacebookAuthProvider();
    const result = yield call([auth, auth.signInWithPopup], provider);
    yield put(signInWithFacebookSuccess(result.user));
  } catch (e) {
    yield put(signInWithFacebookFailed(e));
  }
}

function* handleSignInWithTwitter() {
  try {
    const provider = new firebase.auth.TwitterAuthProvider();
    const result = yield call([auth, auth.signInWithPopup], provider);
    yield put(signInWithTwitterSuccess(result.user));
  } catch (e) {
    yield put(signInWithTwitterFailed(e));
  }
}

function* rootSaga() {
  yield all([
    takeLatest(SIGN_IN, handleSignIn),
    takeLatest(SIGN_IN_WITH_GOOGLE, handleSignInWithGoogle),
    takeLatest(SIGN_IN_WITH_FACEBOOK, handleSignInWithFacebook),
    takeLatest(SIGN_IN_WITH_TWITTER, handleSignInWithTwitter)
  ]);
}

export default rootSaga;
