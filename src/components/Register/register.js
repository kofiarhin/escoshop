import React, { Component } from "react";
import Header from "../Header/header";
import _ from "lodash";
import { firebase } from "../../firebase";

class Register extends Component {

    state = {
        formData: {
            firstName: {
                value: "",
                required: true
            },
            lastName: {
                value: "",
                required: true
            },

            email: {
                value: "",
                required: true
            },
            password: {
                value: "",
                required: true
            }
        }
    }


    handleSubmit = event => {

        event.preventDefault();

        const formData = this.state.formData;
        let dataToSubmit = {};
        for (let key in formData) {

            if (formData[key] !== "") {

                dataToSubmit[key] = formData[key].value;
            }
        }

        if (!_.isEmpty(dataToSubmit)) {

            firebase.database().ref("users").push(dataToSubmit).then(snapshot => {

                this.props.history.push("/login")
            })

        }
    }

    handleChange = (element) => {

        const formData = this.state.formData;
        const item = formData[element.id];

        // console.log(item);

        item.value = element.e.target.value;

        formData[element.id] = item;

        this.setState({
            formData
        })
    }
    render() {

        return <div>

            <Header />


            <div className="form-wrapper">

                <h1 className="main-title text-center"> Create Account</h1>

                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="First name" onChange={e => this.handleChange({ e, id: "firstName" })} vaue={this.state.formData.firstName.value} />

                    <input type="text" placeholder="last name" onChange={e => this.handleChange({ e, id: "lastName" })} vaue={this.state.formData.firstName.value} />


                    <input type="text" placeholder="Email" onChange={e => this.handleChange({ e, id: "email" })} vaue={this.state.formData.firstName.value} />

                    <input type="text" placeholder="Password" onChange={e => this.handleChange({ e, id: "password" })} vaue={this.state.formData.firstName.value} />
                    <button>Create Account</button>
                </form>
            </div>


        </div>
    }
}

export default Register;