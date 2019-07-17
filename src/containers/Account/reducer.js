import {
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILED
} from "./constants";

const INITIAL_STATE = {};

function resetPasswordReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_PASSWORD:
      return state;
    case CHANGE_PASSWORD_SUCCESS:
      return state;
    case CHANGE_PASSWORD_FAILED:
      return state;
    default:
      return state;
  }
}

export default resetPasswordReducer;
