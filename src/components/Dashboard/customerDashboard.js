import React from "react";
import { Link } from "react-router-dom";


const CustomerDashboard = () => {

    return <div>



        <div className="dash-wrapper">

            <Link to="/profile" className="dash-unit"> Profile</Link>
            <Link to="/orders" className="dash-unit"> Orders </Link>
        </div>

    </div>
}

export default CustomerDashboard;