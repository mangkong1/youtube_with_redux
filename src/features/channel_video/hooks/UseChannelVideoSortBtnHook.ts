import { useState } from "react";

const useSortState = () => {
  const [sort, setSort] = useState("time");

  const sortOptions = [
    { name: "time", label: "최신순", sortFunction: () => setSort("time") },
    { name: "view", label: "조회수순", sortFunction: () => setSort("view") },
  ];

  return [sort, sortOptions];
};

export default useSortState;
