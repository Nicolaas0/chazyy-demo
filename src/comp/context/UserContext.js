import React, { useContext } from "react";
import firebase from "../../Firebase";

const ActivityContext = React.createContext();
const firestore = firebase.firestore();

export const useActv = () => {
    return useContext(ActivityContext);
};

export const ActivityProvider = ({ children }) => {

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

    const value = {
        post
    };

    return (
        <ActivityContext.Provider value={value}>
            {children}
        </ActivityContext.Provider>
    );
}