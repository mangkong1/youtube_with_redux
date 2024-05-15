import S from "./styles";

import useSortedData from "./hooks/UseSortedData";
import Data from "./services/MainPageData";

import MainElem from "@features/main";

const MainPage = () => {
  const sortedData = useSortedData(Data);

  return (
    <S.MainContainer>
      {sortedData.map((elem) => (
        <MainElem key={elem.id} data={elem} />
      ))}
    </S.MainContainer>
  );
};

export default MainPage;
