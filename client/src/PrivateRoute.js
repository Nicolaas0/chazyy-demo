// import React from "react";
// import { useAuth } from "./comp/context/AuthContext";
// import { Route, Redirect } from "react-router-dom";

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const { currentUser } = useAuth();
//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//        return currentUser ? <Component {...props} /> : <Redirect to="/SignIn" />;
//       }}
//     ></Route>
//   );
// };

// export default PrivateRoute;
