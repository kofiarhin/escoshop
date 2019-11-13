import React, { Component } from "react";
import Header from "../Header/header";
import _ from "lodash";
import { firebase } from "../../firebase";
import { genDate } from "../../config";

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
        let errors = [];

        for (let key in formData) {
            if (formData[key] !== "") {
                dataToSubmit[key] = formData[key].value;
            }

            //check for errors
            if (formData[key].required && formData[key].value === "") {

                errors.push(`${key} is required`);
            }
        }

        if (!_.isEmpty(errors)) {

            //add created on -genDate
            // add role -customer

            this.setState({

                errors
            })

            console.log(errors);

            return

        }

        dataToSubmit['createdOn'] = genDate();
        dataToSubmit['role'] = "customer"
        //clear errors
        this.setState({

            errors: []
        })

        firebase.database().ref("users").push(dataToSubmit).then(snapshot => {
            this.props.history.push("/login")
        })
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


    renderErrors = errors => {

        return errors ? errors.map(error => {

            return <p className="error"> {error}</p>
        }) : null;
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
                    {this.renderErrors(this.state.errors)}
                    <button>Create Account</button>
                </form>
            </div>


        </div>
    }
}

export default Register;