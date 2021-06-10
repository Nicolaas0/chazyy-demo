import { useEffect, useState } from "react";
import firebase from "./Firebase";

const FetchData = (ep) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [useNull, setNull] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // const abortCont = new AbortController();

    // fetch(url, { signal: abortCont.signal })
    //   .then((res) => {
    //     if (!res.ok) {
    //       throw Error("Error Fetching Data");
    //     }
    //     return res.json();
    //   })
    //   .then((data) => {
    //     if (data.length !== 0) {
    //       const arr = [];
    //       arr.push(data);
    //       setData(arr[0].reverse());
    //       setLoading(false);
    //       setError(null);
    //     } else {
    //       setLoading(false);
    //       setData(null);
    //       setNull(true);
    //       setError(null);
    //       console.log("Data is unavailable");
    //     }
    //   })
    //   .catch((err) => {
    //     if (err.name === "AbortError") {
    //       console.log("Fetch Abort");
    //     } else {
    //       setError("Network Error when attempting fetch the resource.");
    //       setLoading(false)
    //     }
    //   });
    // return () => abortCont.abort();
    const ref = firebase.database().ref(ep);
    ref.on("value", (snapshot) => {
      const data = snapshot.val();
      if (data === null) {
        setError("Error fetching data");
        setLoading(false);
      } else {
        const datArr = [];
        for (let id in data) {
          datArr.push(data[id]);
          setData(datArr.reverse());
          setLoading(false);
          console.log(datArr)
        }
      }
    });
  }, [data, ep]);
  return { data, error, useNull, loading };
};
export default FetchData;
