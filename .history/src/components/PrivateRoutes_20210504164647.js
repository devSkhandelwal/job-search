import React from "react"
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom"


export default function PrivateRoute({ component: Component, ...rest }) {
    
    const user = useSelector(state=>state.login);
    const {userInfo} = user;


  return (
    <Route
      {...rest}
      render={props => {
        return userInfo ? <Component {...props} /> : <Redirect to="/login" />
      }}
    ></Route>
  )
}