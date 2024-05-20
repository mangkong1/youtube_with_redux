import S from "./styles";

import ChannelRouter from "./views/ChannelRouter";

import ChannelTab from "@features/channel_tab/";
import ChannelInfo from "@features/channel_info/";
import useFetch from "@shared/hooks/UseFetch";
import { useParams } from "react-router-dom";

const ChannelPage = () => {
  const { channelName } = useParams();
  const [data] = useFetch("http://localhost:3001/channel");
  const filteredData = data && (data as any[]).filter((elem: any) => elem.channelName === channelName);

  return (
    <S.MainChannelContainer>
      <S.ChannelContainer>
        {filteredData && (filteredData as any[]).map((elem: any) => <ChannelInfo key={elem.id} data={elem} />)}
        <ChannelTab />
        <ChannelRouter />
      </S.ChannelContainer>
    </S.MainChannelContainer>
  );
};

export default ChannelPage;
