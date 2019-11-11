import React from "react";

const Logout = (props) => {


    const logoutUser = () => {

        sessionStorage.removeItem("user");

        props.history.push("/login")
    }

    return <div>  {logoutUser()}</div>
}

export default Logout;