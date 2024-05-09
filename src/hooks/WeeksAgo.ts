import { useState, useEffect } from "react";

const useWeeksAgo = (props: string) => {
  const [weeksAgo, setWeeksAgo] = useState(0);

  useEffect(() => {
    const dateObj = new Date(props);
    const diff = new Date().getTime() - dateObj.getTime();
    const weeks = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
    setWeeksAgo(weeks);
  }, [props]);

  return weeksAgo;
};

export default useWeeksAgo;
