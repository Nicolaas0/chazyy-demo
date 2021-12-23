import React, { useContext, useEffect} from "react";
import firebase from "../../Firebase";

const ActivityContext = React.createContext();
const firestore = firebase.firestore();
// const storage = firebase.storage();

export const useActv = () => {
    return useContext(ActivityContext);
};

export const ActivityProvider = ({ children }) => {
    // const [imgUrl, setImgUrl] = useState()
    const post = (email, message, id) => {
        const ref = firebase.database().ref(`Demo/${id}`);
        const data = {
            username: email,
            message: message,
            id: id,
        };
        ref.set(data).then(() => {
            firestore.collection('users').doc(email).collection('post').doc(id).set({
                id: id,
                message: message,
            })
        })
    }

    // const uploadImage = () => {

    // }

    // const getImage = () => {
    //     storage.ref().child('images/iu.jfif').getDownloadURL().then((url) => {
    //         setImgUrl(url)
    //     })
    // }

    useEffect(() => {
    }, [])

    const value = {
        post
    };

    return (
        <ActivityContext.Provider value={value}>
            {children}
        </ActivityContext.Provider>
    );
}