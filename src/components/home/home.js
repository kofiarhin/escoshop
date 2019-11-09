import React, { Component } from "react";
import { firebase } from "../../firebase";

class Home extends Component {

    componentDidMount() {

        firebase.database().ref("users").push({
            name: "admin",
            email: "admin",
            password: "admin"
        }).then(() => {

            console.log('user created');
        })
    }

    render() {

        return <div>

            home stuff

        </div>
    }
}

export default Home;