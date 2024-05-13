import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Store } from "./shared/states";
import { RecoilRoot } from "recoil";

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <>
      <BrowserRouter>
        <RecoilRoot>
          <Provider store={Store}>
            <App />
          </Provider>
        </RecoilRoot>
      </BrowserRouter>
    </>
  );
}
