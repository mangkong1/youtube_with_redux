import React from "react";
import Header from "./features/header/";
import Aside from "./features/aside";
// import MainPage from "./pages/main_page/MainPage";
import Router from "./Router";

function App() {
  return (
    <>
      <Header />
      <Aside />
      <Router />
      {/* <MainPage /> */}
    </>
  );
}

export default App;
