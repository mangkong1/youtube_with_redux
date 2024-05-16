import SortBtn, { SortOption } from "@shared/ui/sort_btn";

const ChannelVideoSortBtn = () => {
  const sortOptions: SortOption[] = [
    {
      name: "time",
      label: "최신순",
      sortFunction: () => console.log("시간 순서대로 정렬"),
    },
    {
      name: "view",
      label: "조회수순",
      sortFunction: () => console.log("조회수 순서대로 정렬"),
    },
  ];

  return <SortBtn sortOptions={sortOptions} />;
};

export default ChannelVideoSortBtn;
