import { atom, useRecoilState } from "recoil";

const hateState = atom({
  key: "hateState",
  default: false,
});

const useHateBtnState = (): [boolean, () => void] => {
  const [isHate, setIsHate] = useRecoilState(hateState);

  const handleHateState = () => {
    setIsHate(!isHate);
  };

  return [isHate, handleHateState];
};

export default useHateBtnState;
