import { Link } from "react-router-dom";

import S from "../styles";
import DotIcon from "../assets/images/dot.png";

import useWeeksAgo from "@shared/hooks/WeeksAgo";
import useFormatViews from "@shared/hooks/FormatView";

interface ChannelHomeElemProps {
  data: {
    thumbnailSrc: string;
    title: string;
    channelName: string;
    views: number;
    uploadDate: string;
  };
}

const ChannelHomeElem: React.FC<ChannelHomeElemProps> = (props) => {
  const { thumbnailSrc, title, channelName, views, uploadDate } = props.data;

  const weeksAgo = useWeeksAgo(uploadDate);
  const formattedViews = useFormatViews(views);

  return (
    <>
      <S.VideoInfoContainer>
        <S.Thumbnail src={thumbnailSrc} />
        <S.VideoInfo>
          <S.VideoTitle>{title}</S.VideoTitle>
          <Link to={`/${channelName}/home`}>
            <S.ChannelName>{channelName}</S.ChannelName>
          </Link>
          <S.UploadInfo>
            <S.Views>{formattedViews}회</S.Views>
            <S.DotIcon src={DotIcon} />
            <S.UploadDate>{`${weeksAgo}주 전`}</S.UploadDate>
          </S.UploadInfo>
        </S.VideoInfo>
      </S.VideoInfoContainer>
    </>
  );
};

export default ChannelHomeElem;
