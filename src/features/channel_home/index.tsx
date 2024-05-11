import { useParams } from "react-router-dom";

import S from "./styles";
import Data from "./services/ChannelHomeData";
import ChannelHomeElem from "./views/ChannelHomeElem";

const ChannelHome = () => {
  const { channelName } = useParams(); // URL에서 channelName 부분을 추출
  const filteredData = Data.filter((elem) => elem.channelName === channelName); // channelName과 일치하는 데이터만 필터링

  return (
    <>
      <S.HomeContainer>
        <S.HomeIndex>추천영상</S.HomeIndex>
        {filteredData.map((elem) => (
          <ChannelHomeElem key={elem.id} data={elem} />
        ))}
      </S.HomeContainer>
    </>
  );
};

export default ChannelHome;
