import { Routes, Route } from "react-router-dom";

import ChannelHome from "../../../features/channel_home";
import ChannelVideo from "../../../features/channel_video";
import tabs from "../../../features/channel_tab/services/ChannelTabData";

const ChannelRouter = () => (
  <Routes>
    {tabs.map((tab) => (
      <Route key={tab.path} path={tab.path} element={tab.component} />
    ))}
    <Route index element={<ChannelHome />} />
    <Route path="/:channelName/video" element={<ChannelVideo />} />
  </Routes>
);

export default ChannelRouter;
