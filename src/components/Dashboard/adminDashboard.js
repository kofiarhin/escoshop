import React from "react";
import { Link } from "react-router-dom";


const AdminDashboard = () => {

    return <div>


        <div className="dash-wrapper">

            <Link to="/products/add" className="dash-unit"> Add Item </Link>
            <Link to="/orders" className="dash-unit"> Orders </Link>
            <Link to="/users" className="dash-unit"> Customers </Link>
        </div>

    </div>
}


export default AdminDashboard;