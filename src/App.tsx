import React from "react";
import Header from "./features/header/Header";
import Aside from "./features/aside/Aside";
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
