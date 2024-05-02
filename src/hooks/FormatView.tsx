const useFormatViews = (views: number) => {
  if (views >= 10000) {
    const formatted = (views / 10000).toFixed(1);
    return formatted.endsWith(".0") ? formatted.slice(0, -2) + "만" : formatted + "만";
  } else if (views >= 1000) {
    return Math.floor(views / 1000) + "천";
  } else {
    return views;
  }
};

export default useFormatViews;
