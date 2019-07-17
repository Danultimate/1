import {
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILED,
  SIGN_IN_WITH_GOOGLE,
  SIGN_IN_WITH_GOOGLE_SUCCESS,
  SIGN_IN_WITH_GOOGLE_FAILED,
  SIGN_IN_WITH_FACEBOOK,
  SIGN_IN_WITH_FACEBOOK_SUCCESS,
  SIGN_IN_WITH_FACEBOOK_FAILED,
  SIGN_IN_WITH_TWITTER,
  SIGN_IN_WITH_TWITTER_SUCCESS,
  SIGN_IN_WITH_TWITTER_FAILED,
  RESET_STATE
} from "./constants";

export function signIn(email, password) {
  return {
    type: SIGN_IN,
    email,
    password
  };
}

export function signInSuccess(user) {
  return {
    type: SIGN_IN_SUCCESS,
    user
  };
}

export function signInFailed(err) {
  return {
    type: SIGN_IN_FAILED,
    err
  };
}

export function signInWithGoogle() {
  return {
    type: SIGN_IN_WITH_GOOGLE
  };
}

export function signInWithGoogleSuccess(user) {
  return {
    type: SIGN_IN_WITH_GOOGLE_SUCCESS,
    user
  };
}

export function signInWithGoogleFailed(err) {
  return {
    type: SIGN_IN_WITH_GOOGLE_FAILED,
    err
  };
}

export function signInWithFacebook() {
  return {
    type: SIGN_IN_WITH_FACEBOOK
  };
}

export function signInWithFacebookSuccess(user) {
  return {
    type: SIGN_IN_WITH_FACEBOOK_SUCCESS,
    user
  };
}

export function signInWithFacebookFailed(err) {
  return {
    type: SIGN_IN_WITH_FACEBOOK_FAILED,
    err
  };
}

export function signInWithTwitter() {
  return {
    type: SIGN_IN_WITH_TWITTER
  };
}

export function signInWithTwitterSuccess(user) {
  return {
    type: SIGN_IN_WITH_TWITTER_SUCCESS,
    user
  };
}

export function signInWithTwitterFailed(err) {
  return {
    type: SIGN_IN_WITH_TWITTER_FAILED,
    err
  };
}

export function resetState() {
  return {
    type: RESET_STATE
  };
}
