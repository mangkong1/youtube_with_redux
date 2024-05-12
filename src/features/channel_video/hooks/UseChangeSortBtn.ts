import useSortState from "../../../states/sort_btn_state/UseSortBtnAtom";

const useChangeBtn = () => {
  const [sort, setSort] = useSortState();

  const sortByView = () => {
    setSort("view");
  };

  const sortByTime = () => {
    setSort("time");
  };

  return { sort, sortByView, sortByTime };
};

export default useChangeBtn;
