import React from "react";
import ShortsElem from "./views/ShortsElem";
import { MainShortsContainer } from "./styles/ShortsStyle";
import Data from "./services/ShortsData";
import ToggleBtn from "../../components/OnOffBtn";
import { DataType } from "./services/ShortsData"; // Import the DataType interface

const ShortsPage = () => {
  const sortedData = [...Data].sort((a: DataType, b: DataType) => new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime()); // date 기준으로 오름차순 정렬

  return (
    <MainShortsContainer>
      {sortedData.map((elem) => (
        <ShortsElem key={elem.id} data={elem}>
          <ToggleBtn subscribeState={elem.subscribeState} data={elem} toggleOnText="구독 취소" toggleOffText="구독" />
        </ShortsElem>
      ))}
    </MainShortsContainer>
  );
};

export default ShortsPage;
