import styled from "styled-components";

import Header from "../features/header";
import Aside from "../features/aside";
import Router from "./Router";

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
