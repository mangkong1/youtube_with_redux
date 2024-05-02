import React from "react";
import { ChannelTabContainer, ChannelTabBtn } from "./styles/ChannelStyle";
import useChangeTab from ".//hooks/ChangeTabHook";
import tabs from "./services/ChannelTabData";
// import ChannelRouter from "../../../pages/channel/views/ChannelRouter";

const ChannelTab = () => {
  const { activeTab, handleTabNavigation } = useChangeTab(tabs[0].path);

  return (
    <>
      <ChannelTabContainer>
        {tabs.map((elem) => (
          <ChannelTabBtn
            key={elem.path}
            $active={activeTab === elem.path} // Add the $active prop here
            onClick={() => handleTabNavigation(elem.path)}
          >
            {elem.name}
          </ChannelTabBtn>
        ))}
      </ChannelTabContainer>
      {/* <ChannelRouter /> */}
    </>
  );
};

export default ChannelTab;
