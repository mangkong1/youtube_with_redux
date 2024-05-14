import { atom, useRecoilState } from "recoil";

const likeState = atom({
  key: "likeState",
  default: false,
});

const likeCountState = atom({
  key: "likeCountState",
  default: 0,
});

const useLikeBtnState = (): [boolean, number, () => void] => {
  const [isLike, setIsLike] = useRecoilState(likeState);
  const [likeCount, setLikeCount] = useRecoilState(likeCountState);

  const handleLikeState = () => {
    setIsLike(!isLike);
    if (!isLike) {
      setLikeCount(likeCount + 1);
    } else {
      setLikeCount(likeCount - 1);
    }
  };

  return [isLike, likeCount, handleLikeState];
};

export default useLikeBtnState;
