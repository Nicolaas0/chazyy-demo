import { useEffect, useState } from "react";
import firebase from "./Firebase";

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
        } // add all the id to the array first until it finished the process, and then set the data equals to datArr
        setData(datArr.reverse()); // if we didnt seperate the process it will only show 1 data per render
        setLoading(false); // it took me 4 hours to realized it :(
        console.log(datArr); // but atleast i finished it ! :)
      }
    });
  };

  useEffect(() => {
    showData(ep);
  }, [ep]); //remove the data from dependencies, its because the infinity loop for fetching the data
  return { data, error, loading };
};
export default FetchData;
