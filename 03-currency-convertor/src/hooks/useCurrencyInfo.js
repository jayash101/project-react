import { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});

  const fetchData = async () => {
    const response = await fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`,
    );

    const result = await response.json();
    setData(result[currency]);
  };
  
  useEffect(() => {
    fetchData();
  }, [currency]);
  
  return data;
};

export default useCurrencyInfo;
