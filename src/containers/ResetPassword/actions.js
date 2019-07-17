import {
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILED
} from "./constants";

export function resetPassword(email) {
  return {
    type: RESET_PASSWORD,
    email
  };
}

export function resetPasswordSuccess(email) {
  return {
    type: RESET_PASSWORD_SUCCESS,
    email
  };
}

export function resetPasswordFailed(err) {
  return {
    type: RESET_PASSWORD_FAILED,
    err
  };
}
