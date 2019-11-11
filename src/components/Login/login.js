import React, { Component } from "react";
import Header from "../Header/header";
import { firebase, firebaseLooper } from "../../firebase";
import _ from "lodash";


class Login extends Component {

    state = {

        errors: [],
        formData: {
            email: {
                required: true,
                value: ""
            },
            password: {
                required: true,
                value: ""
            }
        }
    }

    handleSubmit = async event => {

        event.preventDefault();

        //get formData
        const formData = this.state.formData;
        let dataToSubmit = {};

        let errors = [];


        //get data to submit
        //check errors 
        for (let key in formData) {

            dataToSubmit[key] = formData[key].value

            if (formData[key].required && formData[key].value === "") {

                errors.push(`${key} is required`);
            }
        }


        //set errors
        if (!_.isEmpty(errors)) {

            return this.setState({

                errors
            })
        }

        //clear all errors
        this.setState({

            errors
        })

        const users = await firebase.database().ref('users').once("value").then(snapshot => {

            return firebaseLooper(snapshot);

        });

        const user = users.find(user => {
            return dataToSubmit.email === user.email
        });

        if (user) {

            const { firstName, lastName, email, id, role } = user;

            const userData = {
                firstName,
                lastName,
                email,
                id,
                role
            };

            sessionStorage.setItem("user", JSON.stringify(userData));
            this.props.history.push("/dashboard");
        }

    }

    handleChange = (element) => {

        const formData = this.state.formData;
        const item = formData[element.id];

        item.value = element.event.target.value;

        formData[element.id] = item;

        this.setState({
            formData
        })

    }


    renderErrors = errors => {

        return errors.map(error => {

            return <p className="error text-center"> {error}</p>
        })
    }

    render() {

        // console.log(this.state);
        return <div>



            <Header />

            <div className="container">


                <h1 className="main-title text-center"> Login </h1>

                <div className="form-wrapper">

                    <form onSubmit={this.handleSubmit}>


                        <input type="text" placeholder="Email" onChange={event => this.handleChange({ event, id: "email" })} value={this.state.formData.email.value} />
                        <input type="password" placeholder="Password" onChange={event => this.handleChange({ event, id: "password" })} value={this.state.formData.password.value} />

                        {this.renderErrors(this.state.errors)}
                        <button> Login</button>

                    </form>
                </div>
            </div>
        </div>
    }
}

export default Login;