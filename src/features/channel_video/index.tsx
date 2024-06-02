import { useParams } from "react-router-dom";

import S from "./styles";
import ChannelVideoElem from "./views/ChannelVideoElem";
import useChannelVideoSortedHook from "./hooks/UseChannelVideoSortedHook";

import SortBtn from "@shared/ui/sort_btn";
import useFetchGet from "@shared/hooks/UseFetchGet";

import { SortOption } from "@shared/ui/sort_btn"; // Import the missing 'SortOption' type

const ChannelVideo = () => {
  const { channelName } = useParams(); // URL에서 channelName 부분을 추출
  const [data] = useFetchGet("http://localhost:3001/video");
  const filteredData = data && (data as any[]).filter((elem: any) => elem.channelName === channelName); // channelName과 일치하는 데이터만 필터링
  const [sort, channelVideoSortOptions] = useChannelVideoSortedHook("time");

  return (
    <S.ChannelVideoContainer>
      <SortBtn sortOptions={channelVideoSortOptions as SortOption[]} />
      {filteredData && (filteredData as any[]).map((elem: any) => <ChannelVideoElem key={elem.id} data={elem} />)}
    </S.ChannelVideoContainer>
  );
};

export default ChannelVideo;
