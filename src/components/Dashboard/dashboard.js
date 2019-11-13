import React, { Component } from "react";
import Header from "../Header/header";
import { Link } from "react-router-dom";
import _ from "lodash";
import CustomerDashboard from "./customerDashboard";
import AdminDashboard from "./adminDashboard";


class Dashboard extends Component {

    state = {

        userData: []
    }
    componentDidMount() {

        const userData = JSON.parse(sessionStorage.getItem("user"));

        this.setState({
            userData
        })

    }


    renderDashBoard = userData => {

        if (!_.isEmpty(userData)) {

            const role = userData.role;

            switch (role) {

                case "customer":
                    return <CustomerDashboard />
                    break;
                case "admin":
                    return < AdminDashboard />
                    break;
                default:
                    return null;
            }
        }

    }
    render() {

        return <div>

            <Header />
            <h1 className="main-title text-center">Dashboard </h1>

            <div className="container">

                {this.renderDashBoard(this.state.userData)}
            </div>

        </div>
    }
}

export default Dashboard;