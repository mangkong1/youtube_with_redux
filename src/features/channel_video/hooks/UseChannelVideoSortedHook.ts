import { useState } from "react";

const useChannelVideoSortedHook = (props: string) => {
  const [sort, setSort] = useState(props);

  const sortOptions = [
    { name: "time", label: "최신순", sortFunction: () => setSort("time") },
    { name: "view", label: "조회수순", sortFunction: () => setSort("view") },
  ];

  return [sort, sortOptions];
};

export default useChannelVideoSortedHook;
