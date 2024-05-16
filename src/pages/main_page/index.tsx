import S from "./styles";
import Data from "./services/MainPageData";
import MainElem from "@features/main";
import MainSortBtn from "@features/main_sort_btns";

const MainPage = () => {
  return (
    <S.MainPageContainer>
      <MainSortBtn />
      <S.MainContainer>
        {Data.map((elem) => (
          <MainElem key={elem.id} data={elem} />
        ))}
      </S.MainContainer>
    </S.MainPageContainer>
  );
};

export default MainPage;
