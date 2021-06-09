import { useEffect, useState } from "react";
import firebase from "firebase";

const FetchData = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [useNull, setNull] = useState(false);
  const [loading, setLoading] = useState(true);

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
          setLoading(false);
          setError(null);
        } else {
          setLoading(false);
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
          setError("Network Error when attempting fetch the resource.");
          setLoading(false)
        }
      });
    return () => abortCont.abort();
  }, [data, url]);
  return { data, error, useNull, loading };
}
  export default FetchData;
