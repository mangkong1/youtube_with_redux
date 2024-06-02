import { Outlet } from "react-router-dom";

import S from "./styles";

import ChannelTab from "@features/channel_tab/";
import ChannelInfo from "@features/channel_info/";
import useFetchGet from "@shared/hooks/UseFetchGet";
import { useParams } from "react-router-dom";

const ChannelPage = () => {
  const { channelName } = useParams();
  const [data] = useFetchGet("http://localhost:3001/channel");
  const filteredData = data && (data as any[]).filter((elem: any) => elem.channelName === channelName);

  return (
    <>
      <S.MainChannelContainer>
        <S.ChannelContainer>
          {filteredData && (filteredData as any[]).map((elem: any) => <ChannelInfo key={elem.id} data={elem} />)}
          <ChannelTab />
          <Outlet />
        </S.ChannelContainer>
      </S.MainChannelContainer>
    </>
  );
};

export default ChannelPage;
