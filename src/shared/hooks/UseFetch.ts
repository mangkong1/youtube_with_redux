// useFetch.ts
import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, [url]);

  return { data };
};

export default useFetch;
