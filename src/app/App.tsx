import styled from "styled-components";

import Router from "./Router";

import Header from "@features/header";
import Aside from "@features/aside";

const AppContainer = styled.div`
  display: flex;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Aside />
      <Router />
    </AppContainer>
  );
}

export default App;
