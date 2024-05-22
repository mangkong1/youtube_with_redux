import { useState } from "react";
import S from "./styles";

export interface SortOption {
  name: string;
  label: string;
  sortFunction: () => void;
}

interface SortBtnProps {
  sortOptions: SortOption[];
}

const SortBtn: React.FC<SortBtnProps> = ({ sortOptions }) => {
  //sortOptions라는 props를 받아옴
  const [activeButton, setActiveButton] = useState<string>("time"); //activeButton이라는 state를 선언하고 초기값을 "time"으로 설정

  const handleClick = (sortFunction: () => void, sortName: string) => {
    //handleClick 함수를 선언하고 sortFunction과 buttonName을 인자로 받음
    sortFunction();
    setActiveButton(sortName); //sortFunction을 실행하고 buttonName을 activeButton으로 설정
  };

  return (
    <>
      <S.SortBtnContainer>
        {sortOptions.map((elem: SortOption) => (
          <S.SortBtn key={elem.name} $isActive={activeButton === elem.name} onClick={() => handleClick(elem.sortFunction, elem.name)}>
            {elem.label}
          </S.SortBtn>
        ))}
      </S.SortBtnContainer>
    </>
  );
};

export default SortBtn;
