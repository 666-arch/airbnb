import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "@/store";
import "virtual:uno.css";
import "./index.less";
import { HashRouter } from "react-router-dom";
import { Suspense } from "react";
createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
