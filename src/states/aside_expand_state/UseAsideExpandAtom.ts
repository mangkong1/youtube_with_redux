import { atom, useRecoilState } from "recoil";

const useAsideExpandState = () => {
  const isExpandedState = atom({
    key: "isExpandState", // 변경된 키
    default: false,
  });

  const [isExpanded, setIsExpanded] = useRecoilState(isExpandedState);

  return [isExpanded, setIsExpanded];
};

export default useAsideExpandState;
