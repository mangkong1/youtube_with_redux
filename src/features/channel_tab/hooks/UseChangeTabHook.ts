import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import tabs from "@features/channel_tab/services/ChannelTabData";

const useChangeTab = (): [string, (index: number) => void] => {
  const [activeTab, setActiveTab] = useState(tabs[0].path);
  const { channelName } = useParams<{ channelName: string }>();
  const navigate = useNavigate();

  const handleActiveTab = (index: number) => {
    setActiveTab(tabs[index].path);
    navigate(`/${channelName}/${tabs[index].path}`);
  };

  return [activeTab, handleActiveTab];
};

export default useChangeTab;
