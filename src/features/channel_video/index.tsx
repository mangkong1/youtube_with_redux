// ChannelVideo 컴포넌트
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import S from "./styles";
import Data, { DataType } from "./services/ChannelVideoData";
import ChannelVideoElem from "./views/ChannelVideoElem";
import useChannelVideoSortedHook from "./hooks/UseChannelVideoSortedHook";

import SortBtn from "@shared/ui/sort_btn";
import ChannelVideoSortOption from "./services/ChannelVideoSortOption";

const ChannelVideo = () => {
  const { channelName } = useParams(); // URL에서 channelName 부분을 추출
  const [filteredData, setFilteredData] = useState<DataType[]>([]);
  const [sort, sortOptions] = useChannelVideoSortedHook("time");

  useEffect(() => {
    let data: DataType[] = Data.filter((elem) => elem.channelName === channelName); // channelName과 일치하는 데이터만 필터링

    if (sort === "view") {
      data = data.sort((a, b) => b.views - a.views);
    } else if (sort === "time") {
      data = data.sort((a, b) => new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime());
    }

    setFilteredData(data);
  }, [sort, channelName]);

  return (
    <S.ChannelVideoContainer>
      <SortBtn sortOptions={ChannelVideoSortOption} />
      {filteredData.map((data, index) => (
        <ChannelVideoElem key={index} data={data} />
      ))}
    </S.ChannelVideoContainer>
  );
};

export default ChannelVideo;
