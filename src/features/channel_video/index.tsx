import { useState } from "react";
import { useParams } from "react-router-dom";

import S from "./styles";
import Data, { DataType } from "./services/ChannelVideoData";
import ChannelVideoElem from "./views/ChannelVideoElem";

import ChannelVideoSortBtns from "@features/channel_video_sort_btns";

const ChannelVideo = () => {
  const { channelName } = useParams(); // URL에서 channelName 부분을 추출
  let filteredData: DataType[] = Data.filter((elem) => elem.channelName === channelName); // channelName과 일치하는 데이터만 필터링
  const [sort] = useState("time"); // useState를 사용하여 sort 상태 관리

  if (sort === "view") {
    filteredData = filteredData.sort((a, b) => b.views - a.views);
  } else if (sort === "time") {
    filteredData = filteredData.sort((a, b) => new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime());
  }

  return (
    <S.ChannelVideoContainer>
      <ChannelVideoSortBtns />
      {filteredData.map((data, index) => (
        <ChannelVideoElem key={index} data={data} />
      ))}
    </S.ChannelVideoContainer>
  );
};

export default ChannelVideo;
