import React, { Component } from "react";
import Header from "../Header/header";
import _ from 'lodash';
import { defaultImage } from "../../config";
import { Link } from "react-router-dom";
import "./profile.sass"

class Profile extends Component {

    state = {

        auth: false,
        userData: []
    }


    componentDidMount() {

        const userData = JSON.parse(sessionStorage.getItem("user"));

        if (!_.isEmpty(userData)) {
            // console.log(userData);

            this.setState({
                userData,
                auth: true
            })
        }
    }


    renderUserProfile = userData => {
        const name = `${userData.firstName} ${userData.lastName}`
        if (!_.isEmpty(userData)) {

            return <div>
                <h1 className="main-title text-center"> {name}</h1>

                <div className='profile'>
                    <div className="avatar" style={{
                        backgroundImage: `url(${defaultImage})`
                    }}></div>
                    <div className="content">
                        <h2 className="email"> Email: {userData.email}</h2>
                        <Link to="/change/profile"> Change Profile Pic</Link>

                    </div>
                    <div className="btn-wrapper">

                        <button> Edit</button>
                        <button> Delete</button>
                    </div>
                </div>
            </div>
        }
    }

    render() {

        return <div>
            <Header />

            <div>


                {this.renderUserProfile(this.state.userData)}

            </div>
        </div>
    }
}

export default Profile;