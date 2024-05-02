import React from "react";
import * as S from "../styles/ChannelHomeStyle";
import DotIcon from "../assets/images/dot.png";
import useWeeksAgo from "../../../hooks/WeeksAgo";
import useFormatViews from "../../../hooks/FormatView";

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
          <S.ChannelName>{channelName}</S.ChannelName>
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
