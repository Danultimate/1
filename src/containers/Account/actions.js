import {
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILED
} from "./constants";

export function changePassword(password) {
  return {
    type: CHANGE_PASSWORD,
    password
  };
}

export function changePasswordSuccess(password) {
  return {
    type: CHANGE_PASSWORD_SUCCESS,
    password
  };
}

export function changePasswordFailed(err) {
  return {
    type: CHANGE_PASSWORD_FAILED,
    err
  };
}
