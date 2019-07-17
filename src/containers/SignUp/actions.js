import {
  CREATE_USER,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILED
} from "./constants";

export function createUser(email, username, password) {
  return {
    type: CREATE_USER,
    email,
    username,
    password
  };
}

export function createUserSuccess(authUser) {
  return {
    type: CREATE_USER_SUCCESS,
    authUser
  };
}

export function createUserFailed(err) {
  return {
    type: CREATE_USER_FAILED,
    err
  };
}
