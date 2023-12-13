import React, { useContext } from "react";
import Usercontext, { AuthContext } from "../Context/Usercontext";
import { Navigate, useLocation } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const { user , loading} = useContext(AuthContext);
  const location = useLocation();

  if(loading){
    return  <h3>loading, please wait ...</h3>
  }
  if (user && user.uid) {
    return children;
  } else {
    return <Navigate to="/login" state={{from:location}} replace></Navigate>;
  }
};

export default PrivateRoute;
