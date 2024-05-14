import S from "./styles";
import likeIcon from "./assets/images/like_icon.png";
import hateIcon from "./assets/images/hate_icon.png";
import commentIcon from "./assets/images/comment_icon.png";
import shareIcon from "./assets/images/share_icon.png";
import moreIcon from "./assets/images/more_icon.png";

import useLikeBtnState from "../../shared/UseLikeBtnAtom";
import useHateBtnState from "../../shared/UseHateBtnAtom";

const ShortsBtns = () => {
  const [isLike, likeCount, handleLikeState] = useLikeBtnState();
  const [isHate, handleHateState] = useHateBtnState();

  return (
    <S.ShortsBtnContainer>
      <S.ShortsBtn className={isLike ? "active" : ""} onClick={handleLikeState}>
        <S.ShortsBtnImg src={likeIcon} />
      </S.ShortsBtn>
      <S.ShortsBtnInfo>{likeCount}</S.ShortsBtnInfo>

      <S.ShortsBtn className={isHate ? "active" : ""} onClick={handleHateState}>
        <S.ShortsBtnImg src={hateIcon} />
      </S.ShortsBtn>
      <S.ShortsBtnInfo>싫어요</S.ShortsBtnInfo>

      <S.ShortsBtn>
        <S.ShortsBtnImg src={commentIcon} />
      </S.ShortsBtn>
      <S.ShortsBtnInfo>댓글</S.ShortsBtnInfo>

      <S.ShortsBtn>
        <S.ShortsBtnImg src={shareIcon} />
      </S.ShortsBtn>
      <S.ShortsBtnInfo>공유</S.ShortsBtnInfo>

      <S.ShortsBtn>
        <S.ShortsBtnImg src={moreIcon} />
      </S.ShortsBtn>
      <S.ShortsBtnInfo>더보기</S.ShortsBtnInfo>
    </S.ShortsBtnContainer>
  );
};

export default ShortsBtns;
