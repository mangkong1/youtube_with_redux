import React from "react";
import * as S from "../styles/ChannelVideoSortBtnStyle";

const ChannelVideoSortBtn = () => {
  return (
    <>
      <S.ChannelVideoSortBtnContainer>
        <S.ChannelVideoSortBtn>최신순</S.ChannelVideoSortBtn>
        <S.ChannelVideoSortBtn>조회수순</S.ChannelVideoSortBtn>
      </S.ChannelVideoSortBtnContainer>
    </>
  );
};

export default ChannelVideoSortBtn;
