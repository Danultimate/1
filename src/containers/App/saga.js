import { eventChannel } from "redux-saga";
import { put, call, take, fork, select } from "redux-saga/effects";
import { push } from "react-router-redux";

//utils
import { auth } from "../../firebase";
import { PUBLIC_PAGES } from "./constants";
import { setUserSession, removeUserSession } from "../../utils/webhelper";
import { setAuthUser } from "./actions";
import * as routes from "../../utils/routes";

export const getRoute = state => state.route;
export const getAuthUser = state => state.app.authUser;

function createChannel() {
  const channel = eventChannel(emit => {
    const unsubscribe = auth.onAuthStateChanged(
      user => emit({ user }),
      error => emit({ error })
    );

    return unsubscribe;
  });

  return channel;
}

function* syncUser() {
  const channel = yield call(createChannel);
  while (true) {
    const { user } = yield take(channel);
    if (user !== null) {
      setUserSession(user.uid);
    } else {
      removeUserSession();
      const route = yield select(getRoute);
      const authUser = yield select(getAuthUser);
      if (
        !PUBLIC_PAGES.includes(route.location.pathname) &&
        authUser === null
      ) {
        yield put(push(routes.SIGN_IN));
      }
    }
    yield put(setAuthUser(user));
  }
}

function* appSaga() {
  yield fork(syncUser);
}

export default appSaga;
