import React from "react";
import { atom, useRecoilState } from "recoil";

const useSortState = () => {
  const sortState = atom({
    key: "sortViewState",
    default: "latest",
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
