import React from "react";
import Home from "../../channel_home/ChannelHome";
import Video from "../../channel_video/ChannelVideo";
import Shorts from "../../channel_shorts/ChannelShorts";
import Live from "../../channel_live/ChannelLive";
import Podcast from "../../channel_podcast/ChannelPodcast";

const tabs = [
  { name: "홈", path: "home", component: <Home /> },
  { name: "동영상", path: "video", component: <Video /> },
  { name: "쇼츠", path: "shorts", component: <Shorts /> },
  { name: "라이브", path: "live", component: <Live /> },
  { name: "팟캐스트", path: "podcast", component: <Podcast /> },
];

export default tabs;
