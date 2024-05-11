// require은 간결하고 직관적이지만 webpack이나 Parcel 같은 번들러가 빌드할 때 모든 이미지를 포함하므로 속도 느리다
// import를 사용하면 필요한 이미지만 포함할 수 있어 빌드 속도가 빨라진다. 하지만 비동기 개념이 들어가므로 나중에 사용예정
type DataType = {
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
    id: 2,
    channelMainImgSrc: require("../../../assets/images/essential_channel_main_img.jpeg"),
    channelImgSrc: require("../../../assets/images/essential_channel_profile_img.jpeg"),
    thumbnailSrc: require("../../../assets/images/essential_thumb_img2.jpeg"),
    title: "essential 게시물 제목입니다2",
    channelName: "essential",
    views: 46034,
    uploadDate: "2024-04-08",
    subscribeState: false,
  },
  {
    id: 3,
    channelMainImgSrc: require("../../../assets/images/essential_channel_main_img.jpeg"),
    channelImgSrc: require("../../../assets/images/essential_channel_profile_img.jpeg"),
    thumbnailSrc: require("../../../assets/images/essential_thumb_img3.jpeg"),
    title: "essential 게시물 제목입니다3",
    channelName: "essential",
    views: 35078,
    uploadDate: "2024-04-15",
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
    id: 5,
    channelMainImgSrc: require("../../../assets/images/chungju_channel_main_img.png"),
    channelImgSrc: require("../../../assets/images/chungju_channel_profile_img.jpeg"),
    thumbnailSrc: require("../../../assets/images/chungju_thumb_img2.jpg"),
    title: "충주시 게시물 제목입니다2",
    channelName: "충주시",
    views: 60037,
    uploadDate: "2024-04-09",
    subscribeState: true,
  },
  {
    id: 6,
    channelMainImgSrc: require("../../../assets/images/chungju_channel_main_img.png"),
    channelImgSrc: require("../../../assets/images/chungju_channel_profile_img.jpeg"),
    thumbnailSrc: require("../../../assets/images/chungju_thumb_img3.jpg"),
    title: "충주시 게시물 제목입니다3",
    channelName: "충주시",
    views: 84009,
    uploadDate: "2024-04-16",
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
    id: 8,
    channelMainImgSrc: require("../../../assets/images/codingapple_channel_main_img.png"),
    channelImgSrc: require("../../../assets/images/codingapple_channel_profile_img.jpeg"),
    thumbnailSrc: require("../../../assets/images/codingapple_thumb_img2.jpg"),
    title: "코딩애플 게시물 제목입니다2",
    channelName: "코딩애플",
    views: 3120,
    uploadDate: "2024-04-10",
    subscribeState: true,
  },
  {
    id: 9,
    channelMainImgSrc: require("../../../assets/images/codingapple_channel_main_img.png"),
    channelImgSrc: require("../../../assets/images/codingapple_channel_profile_img.jpeg"),
    thumbnailSrc: require("../../../assets/images/codingapple_thumb_img3.jpg"),
    title: "코딩애플 게시물 제목입니다3",
    channelName: "코딩애플",
    views: 48000,
    uploadDate: "2024-03-17",
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
  {
    id: 11,
    channelMainImgSrc: require("../../../assets/images/kiatigers_channel_main_img.jpeg"),
    channelImgSrc: require("../../../assets/images/kiatigers_channel_profile_img.jpeg"),
    thumbnailSrc: require("../../../assets/images/kiatigers_thumb_img2.jpg"),
    title: "기아타이거즈 게시물 제목입니다2",
    channelName: "기아타이거즈",
    views: 33000,
    uploadDate: "2024-04-11",
    subscribeState: true,
  },
  {
    id: 12,
    channelMainImgSrc: require("../../../assets/images/kiatigers_channel_main_img.jpeg"),
    channelImgSrc: require("../../../assets/images/kiatigers_channel_profile_img.jpeg"),
    thumbnailSrc: require("../../../assets/images/kiatigers_thumb_img3.jpg"),
    title: "기아타이거즈 게시물 제목입니다3",
    channelName: "기아타이거즈",
    views: 29000,
    uploadDate: "2024-03-18",
    subscribeState: true,
  },
];

export default Data;
