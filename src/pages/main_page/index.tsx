import React from "react";
import MainElem from "../../features/main";
import Data from "../../features/main/services/MainData";
import { MainContainer } from "../../features/main/styles/MainStyle";
import useSortedData from "./hooks/UseSortedData";

const MainPage = () => {
  const sortedData = useSortedData(Data);

  return (
    <MainContainer>
      {sortedData.map((elem) => (
        <MainElem key={elem.id} data={elem} />
      ))}
    </MainContainer>
  );
};

export default MainPage;
