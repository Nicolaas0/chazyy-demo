import FetchData from "../../FetchData";
import PosRes from "../molecule/PosRes";
import ErrorFetch from "../ErrorFetch";
import Loading from "./Loading";
// import firebase from '../Firebase'

const Result = () => { 
    // const ref = firebase.database().ref('Demo/');
    const { data, error, loading } = FetchData('Demo');

    return (
        <div>
            {data && <PosRes val={data} />}
            {error && <ErrorFetch err={error} />}
            {loading && <Loading/>}
        </div>
    )
}
 
export default Result;