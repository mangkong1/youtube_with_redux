import { useState } from "react";

const useFetchPost = (url: string) => {
  const [data, setData] = useState(null);

  const fetchData = async (...args: any[]) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(args),
      });

      if (response.ok) {
        const result = await response.json();

        setData(result);

        console.log(data);
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return [data, fetchData];
};

export default useFetchPost;
