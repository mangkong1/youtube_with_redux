import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

type TabPath = string;

const useChangeTab = (props: TabPath) => {
  const [activeTab, setActiveTab] = useState<TabPath>(props);
  const { channelName } = useParams<{ channelName: string }>();
  const navigate = useNavigate();

  const handleTabNavigation = (path: TabPath) => {
    setActiveTab(path);
    navigate(`/${channelName}/${path}`);
  };

  return { activeTab, handleTabNavigation };
};

export default useChangeTab;
