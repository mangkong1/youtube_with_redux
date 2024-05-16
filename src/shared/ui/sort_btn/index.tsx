import { useState } from "react";
import S from "./styles";

export interface SortOption {
  name: string;
  label: string;
  sortFunction: () => void;
}

interface ChannelVideoSortBtnsProps {
  sortOptions: SortOption[];
}

const SortBtn = ({ sortOptions }: ChannelVideoSortBtnsProps) => {
  const [activeButton, setActiveButton] = useState<string>("time");

  const handleClick = (sortFunction: () => void, buttonName: string) => {
    sortFunction();
    setActiveButton(buttonName);
  };

  return (
    <>
      <S.SortBtnContainer>
        {sortOptions.map((elem) => (
          <S.SortBtn key={elem.name} $isActive={activeButton === elem.name} onClick={() => handleClick(elem.sortFunction, elem.name)}>
            {elem.label}
          </S.SortBtn>
        ))}
      </S.SortBtnContainer>
    </>
  );
};

export default SortBtn;
