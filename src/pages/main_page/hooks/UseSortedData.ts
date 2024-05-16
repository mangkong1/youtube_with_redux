import { useMemo } from "react";

type DataType = {
  id: number;
  channelMainImgSrc: string;
  channelImgSrc: string;
  thumbnailSrc: string;
  title: string;
  channelName: string;
  views: number;
  uploadDate: string;
  subscribeState: boolean;
};

const useSortedData = (props: DataType[], sort: string): DataType[] => {
  const sortedData = useMemo(() => {
    if (sort === "view") {
      return [...props].sort((a, b) => b.views - a.views);
    } else if (sort === "time") {
      return [...props].sort((a, b) => new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime());
    } else {
      return props;
    }
  }, [props, sort]);

  return sortedData;
};

export default useSortedData;
