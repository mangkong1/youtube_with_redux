// import { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// const useChangeTab = (props: string) => {
//   const [activeTab, setActiveTab] = useState<string>(props);
//   const { channelName } = useParams<{ channelName: string }>();
//   const navigate = useNavigate();

//   const handleTabNavigation = (path: string) => {
//     setActiveTab(path);
//     navigate(`/${channelName}/${path}`);
//   };

//   return { activeTab, handleTabNavigation };
// };

// export default useChangeTab;

import { atom, useRecoilState } from "recoil";
import { useParams, useNavigate } from "react-router-dom";

import tabs from "@features/channel_tab/services/ChannelTabData";

const tabState = atom({
  key: "tabState",
  default: tabs[0].path,
});

const useChangeTab = (): [string, (index: number) => void] => {
  const [activeTab, setActiveTab] = useRecoilState(tabState);
  const { channelName } = useParams<{ channelName: string }>();
  const navigate = useNavigate();

  const handleActiveTab = (index: number) => {
    setActiveTab(tabs[index].path);
    navigate(`/${channelName}/${tabs[index].path}`);
  };

  return [activeTab, handleActiveTab];
};

export default useChangeTab;
