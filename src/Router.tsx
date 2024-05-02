import React from "react";
import MainPage from "./pages/main_page/MainPage";
import ShortsPage from "./pages/shorts_page/ShortsPage";
import ChannelPage from "./pages/channel_page/ChannelPage";
import { Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/shorts" element={<ShortsPage />} />
      <Route path="/subscribe" />
      <Route path="/mypage" />
      <Route path="/:channelName/*" element={<ChannelPage />} />
    </Routes>
  );
};

export default Router;
