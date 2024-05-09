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

const useSortedData = (props: DataType[]): DataType[] => {
  const sortedData = useMemo(() => {
    return [...props].sort((a, b) => new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime());
  }, [props]);

  return sortedData;
};

export default useSortedData;
