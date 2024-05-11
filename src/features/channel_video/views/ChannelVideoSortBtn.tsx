import React from "react";
import S from "../styles/ChannelVideoSortBtnStyle";
import useSortState from "../hooks/UseSortState";

const ChannelVideoSortBtns = () => {
  const { sortByTime, sortByView } = useSortState();

  return (
    <>
      <S.ChannelVideoSortBtnContainer>
        <S.ChannelVideoSortBtn onClick={sortByTime}>최신순</S.ChannelVideoSortBtn>
        <S.ChannelVideoSortBtn onClick={sortByView}>조회수순</S.ChannelVideoSortBtn>
      </S.ChannelVideoSortBtnContainer>
    </>
  );
};

export default ChannelVideoSortBtns;
