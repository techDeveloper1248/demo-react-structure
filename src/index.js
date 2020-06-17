import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Row, Container } from "react-bootstrap";
import App from "./App";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./routes";
import { store } from "./store/index";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Container fluid className="pl-0 pr-0 justify-content-center">
        <div>
          <Routes />
        </div>
      </Container>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
