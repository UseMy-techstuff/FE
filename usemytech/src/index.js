import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { techReducer } from "./reducers/techReducer";

import "./index.css";
import App from "./App";

const store = createStore(techReducer, applyMiddleware(thunk));

ReactDOM.render(<App store={store} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
