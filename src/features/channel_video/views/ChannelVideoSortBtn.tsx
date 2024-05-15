import { useState } from "react";

import S from "../styles/ChannelVideoSortBtnStyle";

import useSortState from "@shared/UseSortBtnAtom";

const ChannelVideoSortBtns = () => {
  const [, sortByTime, sortByView] = useSortState(); //순서 중요함
  const [activeButton, setActiveButton] = useState<string>("time");

  const handleClick = (sortFunction: () => void, buttonName: string) => {
    sortFunction();
    setActiveButton(buttonName);
  };

  return (
    <>
      <S.ChannelVideoSortBtnContainer>
        <S.ChannelVideoSortBtn $isActive={activeButton === "time"} onClick={() => handleClick(sortByTime, "time")}>
          최신순
        </S.ChannelVideoSortBtn>
        <S.ChannelVideoSortBtn $isActive={activeButton === "view"} onClick={() => handleClick(sortByView, "view")}>
          조회수순
        </S.ChannelVideoSortBtn>
      </S.ChannelVideoSortBtnContainer>
    </>
  );
};

export default ChannelVideoSortBtns;
