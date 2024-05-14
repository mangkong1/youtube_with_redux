import ReactDOM from "react-dom/client";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Store } from "./shared";
import { GlobalStyle } from "./app/GlobalStyle";
import { RecoilRoot } from "recoil";

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <>
      <BrowserRouter>
        <RecoilRoot>
          <Provider store={Store}>
            <GlobalStyle />
            <App />
          </Provider>
        </RecoilRoot>
      </BrowserRouter>
    </>
  );
}
