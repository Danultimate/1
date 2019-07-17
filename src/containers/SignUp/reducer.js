import {
  CREATE_USER,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILED
} from "./constants";

const INITIAL_STATE = {};

function signUpReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CREATE_USER:
      return state;
    case CREATE_USER_SUCCESS:
      return state;
    case CREATE_USER_FAILED:
      return state;
    default:
      return state;
  }
}

export default signUpReducer;
