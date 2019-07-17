import { combineReducers } from "redux";
import appReducer from "./../containers/App/reducer";
import homeReducer from "./../containers/Home/reducer";
import signInReducer from "./../containers/SignIn/reducer";
import signUpReducer from "./../containers/SignUp/reducer";
import resetPasswordReducer from "./../containers/ResetPassword/reducer";

import { LOCATION_CHANGE } from "react-router-redux";

// Initial routing state
const routeInitialState = {
  location: null
};

/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return {
        ...state,
        location: action.payload
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  route: routeReducer,
  app: appReducer,
  home: homeReducer,
  signIn: signInReducer,
  signUp: signUpReducer,
  resetPassword: resetPasswordReducer
});

export default rootReducer;
