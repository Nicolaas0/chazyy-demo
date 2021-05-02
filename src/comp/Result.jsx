import FetchData from "../FetchData";
import PosRes from "./PosRes";

const Result = () => {

    const { data } = FetchData('http://localhost:8000/post');

    return (
        <div>
            {data && <PosRes val={data}/>}
        </div>
    )
}
 
export default Result;