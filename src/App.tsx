import Header from "./features/header/";
import Aside from "./features/aside";
import Router from "./Router";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Aside />
      <Router />
    </>
  );
}

export default App;
