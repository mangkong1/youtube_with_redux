import { atom, useRecoilState } from "recoil";

const isExpandedState = atom({
  key: "isExpandState",
  default: true,
});

const useAsideExpandState = (): [boolean, () => void] => {
  const [isExpanded, setIsExpanded] = useRecoilState(isExpandedState);

  const toggleAsideExpand = () => {
    setIsExpanded((prevState) => !prevState); // 상태를 이전 상태의 반대로 설정
  };

  return [isExpanded, toggleAsideExpand];
};

export default useAsideExpandState;
