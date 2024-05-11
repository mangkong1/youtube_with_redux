import { atom, useRecoilState } from "recoil";

const useSortState = () => {
  const sortState = atom({
    key: "sortViewState",
    default: "time", //초깃값 time으로 되어있도록 함
  });
  const [sort, setSort] = useRecoilState(sortState);

  const sortByView = () => {
    setSort("view");
  };

  const sortByTime = () => {
    setSort("time");
  };

  return { sort, sortByView, sortByTime };
};

export default useSortState;
