import S from "./styles";

import useSortedData from "./hooks/UseSortedData";

import MainElem from "../../features/main";
import Data from "./services/MainPageData";

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
