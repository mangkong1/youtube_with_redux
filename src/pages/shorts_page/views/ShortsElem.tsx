import { Link } from "react-router-dom";

import S from "../styles";

import ShortsBtns from "@features/shorts_btns";

interface ShortsElemProps {
  data: {
    thumbnailSrc: string;
    channelImgSrc: string;
    channelName: string;
  };
  children: React.ReactNode;
}

const ShortsElem: React.FC<ShortsElemProps> = (props) => {
  const { thumbnailSrc, channelImgSrc, channelName } = props.data;
  const { children } = props;

  return (
    <S.ShortsContainer>
      <S.ShortsVideoContainer>
        <S.ShortsVideoImg src={thumbnailSrc} />
        <S.ShortsVideoInfo>
          <Link to={`/${channelName}`}>
            <S.ShortsProfileImg src={channelImgSrc} />
          </Link>
          <S.ShortsProfileName>{channelName}</S.ShortsProfileName>
          {children}
        </S.ShortsVideoInfo>
      </S.ShortsVideoContainer>
      <ShortsBtns />
    </S.ShortsContainer>
  );
};

export default ShortsElem;
