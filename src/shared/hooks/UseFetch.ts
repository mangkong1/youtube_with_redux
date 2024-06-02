import { useState } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState(null);

  const fetchData = async (method: string, body: any) => {
    console.log(body);

    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const result = await response.json();

    setData(result);
  };

  return [data, fetchData];
};

export default useFetch;
