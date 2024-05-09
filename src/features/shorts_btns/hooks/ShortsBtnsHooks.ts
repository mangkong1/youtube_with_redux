import { useState } from "react";

const useChangeBtnState = () => {
  const [isLike, setisLike] = useState(false);
  const [isHate, setisHate] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleLikeActive = () => {
    setisLike(!isLike);
    if (!isLike) {
      setLikeCount(likeCount + 1);
    } else {
      setLikeCount(likeCount - 1);
    }
  };

  const handleHateActive = () => {
    setisHate(!isHate);
  };

  return { isLike, isHate, likeCount, handleLikeActive, handleHateActive };
};

export default useChangeBtnState;
