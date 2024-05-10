import React from "react";
import { useParams } from "react-router-dom";
import Data from "./services/ChannelVideoData";
import { ChannelVideoContainer } from "./styles/ChannelVideoStyle";
import ChannelVideoElem from "./views/ChannelVideoElem";
import ChannelVideoSortBtn from "./views/ChannelVideoSortBtn";

const ChannelVideo = () => {
  const { channelName } = useParams(); // URL에서 channelName 부분을 추출
  const filteredData = Data.filter((elem) => elem.channelName === channelName); // channelName과 일치하는 데이터만 필터링

  return (
    <>
      <ChannelVideoContainer>
        <ChannelVideoSortBtn />
        {filteredData.map((elem) => (
          <ChannelVideoElem key={elem.id} data={elem} />
        ))}
      </ChannelVideoContainer>
    </>
  );
};

export default ChannelVideo;
