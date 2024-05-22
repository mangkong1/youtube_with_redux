import { Routes, Route } from "react-router-dom";

import MainPage from "@pages/main_page";
import ShortsPage from "@pages/shorts_page";
import ChannelPage from "@pages/channel_page";
import ChannelRouter from "@app/ChannelRouter";

const Router = () => {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path="/shorts" element={<ShortsPage />} />
      <Route path="/subscribe" />
      <Route path="/mypage" />
      <Route path="/:channelName/*" element={<ChannelPage />}>
        <Route path="*" element={<ChannelRouter />} />
      </Route>
    </Routes>
  );
};

export default Router;

// 채널을 위한 url을 더 깊이 만들어서 필요없는 접근 방지(/channel/page/:channelName) 같은 느낌으로
