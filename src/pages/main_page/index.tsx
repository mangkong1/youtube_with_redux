import S from "./styles";
import Data from "./services/MainPageData";
import MainSortOption from "./services/MainSortOption";

import SortBtn from "@shared/ui/sort_btn";
import MainElem from "@features/main";

const MainPage = () => {
  return (
    <S.MainPageContainer>
      <SortBtn sortOptions={MainSortOption} />
      <S.MainContainer>
        {Data.map((elem) => (
          <MainElem key={elem.id} data={elem} />
        ))}
      </S.MainContainer>
    </S.MainPageContainer>
  );
};

export default MainPage;
