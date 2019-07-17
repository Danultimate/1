import {
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILED
} from "./constants";

const INITIAL_STATE = {};

function resetPasswordReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case RESET_PASSWORD:
      return state;
    case RESET_PASSWORD_SUCCESS:
      return state;
    case RESET_PASSWORD_FAILED:
      return { ...state, err: action.err };
    default:
      return state;
  }
}

export default resetPasswordReducer;
