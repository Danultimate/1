import {
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILED,
  SIGN_IN_WITH_GOOGLE,
  SIGN_IN_WITH_GOOGLE_SUCCESS,
  SIGN_IN_WITH_GOOGLE_FAILED,
  SIGN_IN_WITH_FACEBOOK,
  SIGN_IN_WITH_FACEBOOK_SUCCESS,
  SIGN_IN_WITH_FACEBOOK_FAILED,
  RESET_STATE
} from "./constants";

const INITIAL_STATE = {};

function signInReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SIGN_IN:
      return state;
    case SIGN_IN_SUCCESS:
      return state;
    case SIGN_IN_FAILED:
      return { ...state, err: action.err };
    case SIGN_IN_WITH_GOOGLE:
      return state;
    case SIGN_IN_WITH_GOOGLE_SUCCESS:
      return state;
    case SIGN_IN_WITH_GOOGLE_FAILED:
      return state;
    case SIGN_IN_WITH_FACEBOOK:
      return state;
    case SIGN_IN_WITH_FACEBOOK_SUCCESS:
      return state;
    case SIGN_IN_WITH_FACEBOOK_FAILED:
      return state;
    case RESET_STATE:
      return INITIAL_STATE;
    default:
      return state;
  }
}

export default signInReducer;
