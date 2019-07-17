import { SET_USERS, SET_INITIAL_STATE } from "./constants";

export function setUsers(users) {
  return {
    type: SET_USERS,
    users
  };
}

export function setInitialState(users) {
  return {
    type: SET_INITIAL_STATE,
    users
  };
}
