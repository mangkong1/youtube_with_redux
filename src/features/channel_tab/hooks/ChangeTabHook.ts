import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const useChangeTab = (props: string) => {
  const [activeTab, setActiveTab] = useState<string>(props);
  const { channelName } = useParams<{ channelName: string }>();
  const navigate = useNavigate();

  const handleTabNavigation = (path: string) => {
    setActiveTab(path);
    navigate(`/${channelName}/${path}`);
  };

  return { activeTab, handleTabNavigation };
};

export default useChangeTab;
