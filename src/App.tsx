import React from "react";
import Header from "./features/header/";
import Aside from "./features/aside";
// import MainPage from "./pages/main_page/MainPage";
import Router from "./Router";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Aside />
      <Router />
      {/* <MainPage /> */}
    </>
  );
}

export default App;
