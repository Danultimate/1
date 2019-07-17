import { SIGN_OUT, SIGN_OUT_SUCCESS, SIGN_OUT_FAILED } from "./constants";

const INITIAL_STATE = {};

function navigationReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SIGN_OUT:
      return state;
    case SIGN_OUT_SUCCESS:
      return state;
    case SIGN_OUT_FAILED:
      return state;
    default:
      return state;
  }
}

export default navigationReducer;
