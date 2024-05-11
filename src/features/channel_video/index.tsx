import { useParams } from "react-router-dom";
import Data from "./services/ChannelVideoData";
import { ChannelVideoContainer } from "./styles/ChannelVideoStyle";
import ChannelVideoElem from "./views/ChannelVideoElem";
import ChannelVideoSortBtns from "./views/ChannelVideoSortBtn";
import useSortState from "./hooks/UseSortState";

const ChannelVideo = () => {
  const { channelName } = useParams(); // URL에서 channelName 부분을 추출
  let filteredData = Data.filter((elem) => elem.channelName === channelName); // channelName과 일치하는 데이터만 필터링
  const { sort } = useSortState();

  if (sort === "view") {
    filteredData = filteredData.sort((a, b) => b.views - a.views);
  } else if (sort === "time") {
    filteredData = filteredData.sort((a, b) => new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime());
  }

  return (
    <>
      <ChannelVideoContainer>
        <ChannelVideoSortBtns />
        {filteredData.map((elem) => (
          <ChannelVideoElem key={elem.id} data={elem} />
        ))}
      </ChannelVideoContainer>
    </>
  );
};

export default ChannelVideo;
