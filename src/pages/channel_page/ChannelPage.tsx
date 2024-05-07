import React from "react";
import { MainChannelContainer, ChannelContainer } from "./styles/ChannelStyle";
import { useParams } from "react-router-dom";
import ChannelInfo from "../../features/channel_info/ChannelInfo";
import ChannelTab from "../../features/channel_tab/ChannelTab";
import ToggleBtn from "../../components/OnOffBtn";
import Data from "../../features/channel_home/services/ChannelHomeData";
// import { DataType } from "../../features/channel_home/services/ChannelHomeData";

const ChannelPage = () => {
  const { channelName } = useParams();
  const filteredData = Data.find((elem) => elem.channelName === channelName);

  return (
    <MainChannelContainer>
      <ChannelContainer>
        {filteredData && (
          <ChannelInfo key={filteredData.id} data={filteredData}>
            <ToggleBtn subscribeState={filteredData.subscribeState} data={filteredData} toggleOnText="구독 취소" toggleOffText="구독" />
          </ChannelInfo>
        )}
        <ChannelTab />
      </ChannelContainer>
    </MainChannelContainer>
  );
};

export default ChannelPage;
