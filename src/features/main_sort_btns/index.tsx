import SortBtn, { SortOption } from "@shared/ui/sort_btn";

const MainSortBtn = () => {
  const sortOptions: SortOption[] = [
    {
      name: "all",
      label: "전체",
      sortFunction: () => console.log("전체 정렬"),
    },
    {
      name: "baseball",
      label: "야구",
      sortFunction: () => console.log("야구 분류"),
    },
    {
      name: "music",
      label: "음악",
      sortFunction: () => console.log("음악 분류"),
    },
    {
      name: "animal",
      label: "동물",
      sortFunction: () => console.log("동물 분류"),
    },
    {
      name: "human",
      label: "사람",
      sortFunction: () => console.log("사람 분류"),
    },
  ];

  return <SortBtn sortOptions={sortOptions} />;
};

export default MainSortBtn;
