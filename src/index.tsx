import React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import reducer from './reducer'
// import * as actions from './actions'
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from "redux-devtools-extension";

const myCompose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);


