import React from "react";
import { hydrate, render } from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./containers/App";
import configureStore from "./store";
import { ConnectedRouter } from "react-router-redux";
import createHistory from "history/createBrowserHistory";

import registerServiceWorker from "./registerServiceWorker";
import "font-awesome/css/font-awesome.min.css";

const history = createHistory();
const store = configureStore(history);

const rootElement = document.getElementById("root");

const app = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);

if (rootElement.hasChildNodes()) {
  hydrate(app, rootElement);
} else {
  render(app, rootElement);
}

registerServiceWorker();
