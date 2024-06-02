import { useParams } from "react-router-dom";

import S from "./styles";
import ChannelHomeElem from "./views/ChannelHomeElem";

import useFetchGet from "@shared/hooks/UseFetchGet";

const ChannelHome = () => {
  const { channelName } = useParams(); // URL에서 channelName 부분을 추출
  const [data] = useFetchGet("http://localhost:3001/video");
  const filteredData = data && (data as any[]).filter((elem: any) => elem.channelName === channelName && elem.recommendState === true); // channelName과 일치하는 데이터만 필터링

  return (
    <>
      <S.HomeContainer>
        <S.HomeIndex>추천영상</S.HomeIndex>
        {filteredData && (filteredData as any[]).map((elem: any) => <ChannelHomeElem key={elem.id} data={elem} />)}
      </S.HomeContainer>
    </>
  );
};

export default ChannelHome;
