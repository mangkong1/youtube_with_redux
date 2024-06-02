import { useEffect, useState } from "react";

const useFetchGet = (url: string) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      //기본 method가 get이므로 생략가능, Contedt-Type헤더는 요청 본문이 있는 경우에만 필요
      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();

      setData(result);
    };

    fetchData();
  }, [url]);

  return [data];
};

export default useFetchGet;
