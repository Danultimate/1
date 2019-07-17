import { SET_AUTH_USER } from "./constants";

export function setAuthUser(authUser) {
  return {
    type: SET_AUTH_USER,
    authUser
  };
}
