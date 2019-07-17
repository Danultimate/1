import { INITIAL_STATE, SET_USERS, SET_INITIAL_STATE } from "./constants";

const applySetUsers = (state, action) => ({
  ...state,
  users: action.users
});

function homeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_USERS: {
      return applySetUsers(state, action);
    }
    case SET_INITIAL_STATE: {
      return {
        ...state,
        users: INITIAL_STATE.users
      };
    }
    default:
      return state;
  }
}

export default homeReducer;
