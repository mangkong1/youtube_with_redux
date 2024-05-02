import React from "react";
import { Routes, Route } from "react-router-dom";
import ChannelHome from "../../../features/channel_home/ChannelHome";
import tabs from "../../../features/channel_tab/services/ChannelTabData";

const ChannelRouter = () => (
  <Routes>
    <Route path="/" element={<ChannelHome />} />
    {tabs.map((tab) => (
      <Route key={tab.path} path={tab.path} element={tab.component} />
    ))}
  </Routes>
);

export default ChannelRouter;
