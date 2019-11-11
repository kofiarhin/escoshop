import React, { Component } from "react";
import Header from "../Header/header";


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


        </div>
    }
}

export default Dashboard;