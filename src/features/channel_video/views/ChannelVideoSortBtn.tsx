import React, { useState } from "react";
import S from "../styles/ChannelVideoSortBtnStyle";
import useSortState from "../hooks/UseSortState";

const ChannelVideoSortBtns = () => {
  const { sortByTime, sortByView } = useSortState();
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleClick = (sortFunction: () => void, buttonName: string) => {
    sortFunction();
    setActiveButton(buttonName);
  };

  return (
    <>
      <S.ChannelVideoSortBtnContainer>
        <S.ChannelVideoSortBtn isActive={activeButton === "time"} onClick={() => handleClick(sortByTime, "time")}>
          최신순
        </S.ChannelVideoSortBtn>
        <S.ChannelVideoSortBtn isActive={activeButton === "view"} onClick={() => handleClick(sortByView, "view")}>
          조회수순
        </S.ChannelVideoSortBtn>
      </S.ChannelVideoSortBtnContainer>
    </>
  );
};

export default ChannelVideoSortBtns;
