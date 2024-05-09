import React from "react";
import { useParams } from "react-router-dom";
import Data from "./services/ChannelHomeData";
import { HomeContainer, HomeIndex } from "./styles/ChannelHomeStyle";
import ChannelHomeElem from "./views/ChannelHomeElem";

const ChannelHome = () => {
  const { channelName } = useParams(); // URL에서 channelName 부분을 추출
  const filteredData = Data.filter((elem) => elem.channelName === channelName); // channelName과 일치하는 데이터만 필터링

  return (
    <>
      <HomeContainer>
        <HomeIndex>추천영상</HomeIndex>
        {filteredData.map((elem) => (
          <ChannelHomeElem key={elem.id} data={elem} />
        ))}
      </HomeContainer>
    </>
  );
};

export default ChannelHome;
