import { SIGN_OUT, SIGN_OUT_SUCCESS, SIGN_OUT_FAILED } from "./constants";

export function signOut() {
  return {
    type: SIGN_OUT
  };
}

export function signOutSuccess() {
  return {
    type: SIGN_OUT_SUCCESS
  };
}

export function signOutFailed(err) {
  return {
    type: SIGN_OUT_FAILED,
    err
  };
}
