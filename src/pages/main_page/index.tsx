import S from "./styles";
import MainSortOption from "./services/MainSortOption";

import SortBtn from "@shared/ui/sort_btn";
import MainElem from "@features/main";
import useFetch from "@shared/hooks/UseFetch";

const MainPage = () => {
  const { data } = useFetch("http://localhost:3001/video");

  return (
    <S.MainPageContainer>
      <SortBtn sortOptions={MainSortOption} />
      <S.MainContainer>{data && (data as any[]).map((elem: any) => <MainElem key={elem.id} data={elem} />)}</S.MainContainer>
    </S.MainPageContainer>
  );
};

export default MainPage;
