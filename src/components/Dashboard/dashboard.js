import React, { Component } from "react";
import Header from "../Header/header";
import { Link } from "react-router-dom";


class Dashboard extends Component {

    state = {

        user: []
    }
    componentDidMount() {

        const user = JSON.parse(sessionStorage.getItem("user"));

    }


    render() {

        return <div>

            <Header />
            <h1 className="main-title text-center">Dashboard </h1>

            <div className="dash-wrapper">

                <Link to="/products/add" className="dash-unit"> Add Item </Link>
                <Link to="/orders" className="dash-unit"> Orders </Link>
                <Link to="/users" className="dash-unit"> Customers </Link>
            </div>


        </div>
    }
}

export default Dashboard;