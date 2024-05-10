// require은 간결하고 직관적이지만 webpack이나 Parcel 같은 번들러가 빌드할 때 모든 이미지를 포함하므로 속도 느리다
// import를 사용하면 필요한 이미지만 포함할 수 있어 빌드 속도가 빨라진다. 하지만 비동기 개념이 들어가므로 나중에 사용예정
export type DataType = {
  id: number;
  channelMainImgSrc: string;
  channelImgSrc: string;
  thumbnailSrc: string;
  title: string;
  channelName: string;
  views: number;
  uploadDate: string;
  subscribeState: boolean;
};

const Data: DataType[] = [
  {
    id: 1,
    channelMainImgSrc: require("../../../assets/images/essential_channel_main_img.jpeg"),
    channelImgSrc: require("../../../assets/images/essential_channel_profile_img.jpeg"),
    thumbnailSrc: require("../../../assets/images/essential_thumb_img1.jpeg"),
    title: "essential 게시물 제목입니다1",
    channelName: "essential",
    views: 50345,
    uploadDate: "2024-04-01",
    subscribeState: false,
  },
  {
    id: 4,
    channelMainImgSrc: require("../../../assets/images/chungju_channel_main_img.png"),
    channelImgSrc: require("../../../assets/images/chungju_channel_profile_img.jpeg"),
    thumbnailSrc: require("../../../assets/images/chungju_thumb_img1.webp"),
    title: "충주시 게시물 제목입니다1",
    channelName: "충주시",
    views: 11078,
    uploadDate: "2024-04-02",
    subscribeState: true,
  },
  {
    id: 7,
    channelMainImgSrc: require("../../../assets/images/codingapple_channel_main_img.png"),
    channelImgSrc: require("../../../assets/images/codingapple_channel_profile_img.jpeg"),
    thumbnailSrc: require("../../../assets/images/codingapple_thumb_img1.webp"),
    title: "코딩애플 게시물 제목입니다1",
    channelName: "코딩애플",
    views: 22033,
    uploadDate: "2024-04-03",
    subscribeState: true,
  },
  {
    id: 10,
    channelMainImgSrc: require("../../../assets/images/kiatigers_channel_main_img.jpeg"),
    channelImgSrc: require("../../../assets/images/kiatigers_channel_profile_img.jpeg"),
    thumbnailSrc: require("../../../assets/images/kiatigers_thumb_img1.jpg"),
    title: "기아타이거즈 게시물 제목입니다1",
    channelName: "기아타이거즈",
    views: 15000,
    uploadDate: "2024-04-04",
    subscribeState: true,
  },
];

export default Data;
