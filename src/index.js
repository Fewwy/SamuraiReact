import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./redux/state/state";

let rerenderEntireTree = (props) => {
  ReactDOM.render(
    <App
    appState={store.getState()}
    dispatch={store.dispatch.bind(store)}
    />,
    document.getElementById("root")
  );
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)
