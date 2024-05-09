import React from "react";
import { MainChannelContainer, ChannelContainer } from "./styles/ChannelStyle";
import { useParams } from "react-router-dom";
import ChannelInfo from "../../features/channel_info";
import ChannelTab from "../../features/channel_tab/ChannelTab";
import ToggleBtn from "../../components/onoff_btn/OnOffBtn";
import Data from "../../features/channel_home/services/ChannelHomeData";
// import { DataType } from "../../features/channel_home/services/ChannelHomeData";\
import { useSelector } from "react-redux";

const ChannelPage = () => {
  const { channelName } = useParams();
  const filteredData = Data.find((elem) => elem.channelName === channelName);
  const subscribeState = useSelector((state: { subscribe: boolean }) => state.subscribe);

  return (
    <MainChannelContainer>
      <ChannelContainer>
        {filteredData && (
          <ChannelInfo key={filteredData.id} data={filteredData}>
            <ToggleBtn subscribeState={subscribeState} data={filteredData} toggleOnText="구독 취소" toggleOffText="구독" />
          </ChannelInfo>
        )}
        <ChannelTab />
      </ChannelContainer>
    </MainChannelContainer>
  );
};

export default ChannelPage;
