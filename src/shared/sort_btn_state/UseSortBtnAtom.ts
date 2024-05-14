import { atom, useRecoilState } from "recoil";

const sortState = atom({
  key: "sortViewState",
  default: "time", //초깃값 time으로 되어있도록 함
});

const useSortState = (): [string, () => void, () => void] => {
  const [sort, setSort] = useRecoilState(sortState);

  const sortByTime = () => {
    setSort("time");
  };

  const sortByView = () => {
    setSort("view");
  };

  return [sort, sortByTime, sortByView];
};

export default useSortState;
