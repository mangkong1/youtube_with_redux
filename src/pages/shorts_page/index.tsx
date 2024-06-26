import ShortsElem from "./views/ShortsElem";
import S from "./styles";
import Data from "./services/ShortsPageData";
import { DataType } from "./services/ShortsPageData"; // Import the DataType interface

import ToggleBtn from "@shared/ui/onoff_btn";

const ShortsPage = () => {
  const sortedData = [...Data].sort((a: DataType, b: DataType) => new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime()); // date 기준으로 오름차순 정렬

  return (
    <S.MainShortsContainer>
      {sortedData.map((elem) => (
        <ShortsElem key={elem.id} data={elem}>
          <ToggleBtn toggleOnText="구독 취소" toggleOffText="구독" />
        </ShortsElem>
      ))}
    </S.MainShortsContainer>
  );
};

export default ShortsPage;
