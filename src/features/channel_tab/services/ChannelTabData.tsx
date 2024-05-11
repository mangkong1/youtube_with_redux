import Home from "../../channel_home/";
import Video from "../../channel_video/";
import Shorts from "../../channel_shorts/";
import Live from "../../channel_live/";
import Podcast from "../../channel_podcast/";

const tabs = [
  { name: "홈", path: "home", component: <Home /> },
  { name: "동영상", path: "video", component: <Video /> },
  { name: "쇼츠", path: "shorts", component: <Shorts /> },
  { name: "라이브", path: "live", component: <Live /> },
  { name: "팟캐스트", path: "podcast", component: <Podcast /> },
];

export default tabs;
