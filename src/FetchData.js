import { useEffect, useState } from "react";
import firebase from "./Firebase"

const FetchData = (ep) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const showData = () => {

    const ref = firebase.database().ref(ep);
    ref.on("value", (snapshot) => {
      const res = snapshot.val();
      const name = Object.getOwnPropertyNames(res);

      if (res === null) {
        setError("Error fetching data");
        setLoading(false);
      } else {
        const datArr = [];
        for (let i = 0; i < name.length; i++) {
          const id = name[i];
          datArr.push(res[id]);
        }
        setData(datArr);
        console.log(datArr)
        setLoading(false);
      }
    });
  };

  useEffect(() => {
    showData(ep);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ep]);
  return { data, error, loading };
};
export default FetchData;
