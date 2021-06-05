import { useEffect, useState } from "react";

const FetchData = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [useNull, setNull] = useState(false);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Error Fetching Data");
        }
        return res.json();
      })
      .then((data) => {
        if (data.length !== 0) {
          const arr = [];
          arr.push(data);
          setData(arr[0].reverse());
          setError(null);
        } else {
          setData(null);
          setNull(true);
          setError(null);
          console.log("Data is unavailable");
        }
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch Abort");
        } else {
          setError(err.message);
        }
      });
    return () => abortCont.abort();
  }, [data, url]);
  return { data, error, useNull };
};

export default FetchData;
