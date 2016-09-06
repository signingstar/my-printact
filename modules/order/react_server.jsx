import React from "react";
import { renderToString } from 'react-dom/server'
import { Provider } from "react-redux";
import { RouterContext, RouterState } from "react-router";
import { ReactRouterReduxHistory } from "react-router-redux";

import { TYPE_CATEGORY, TYPE_SIZE, TYPE_SURFACE, TYPE_COAT, TYPE_QUANTITY } from "./frontend/actions";
import createStore from "./frontend/store";

const ReactComponent = (renderProps, history) => {
  let pathname = renderProps.location.pathname;
  const orderPath = /^\/order[\/]?([a-z\-]*)$/;
  let initialPayload = {  }
  // Create a new Redux store instance
  const store = createStore(history, initialPayload);

  // Render the component to a string
  const reactHTML = renderToString(
    <Provider store={store}>
      <RouterContext {...renderProps} />
    </Provider>
  );

  // Grab the initial state from our Redux store
  const preloadedState = store.getState();

  return { reactHTML, preloadedState};
}

export default ReactComponent;