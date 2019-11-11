import React, { Component } from "react";
import Header from "../Header/header";

class Register extends Component {

    state = {
        formData: {
            firstName: {
                value: "",
                required: true
            },
            lastname: {
                value: "",
                required: true
            },

            email: {
                value: "",
                required: true
            }
        }
    }


    handleSubmit = event => {

        event.preventDefault();

        console.log("testing mic")
    }

    handleChange = (element) => {

        const formData = this.state.formData;
        const item = formData[element.id];

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

                    <input type="text" placeholder="First name" onChange={e => this.handleChange({ e, id: "firstName" })} vaue={this.state.formData.firstName.value} />


                    <input type="text" placeholder="First name" onChange={e => this.handleChange({ e, id: "firstName" })} vaue={this.state.formData.firstName.value} />

                    <input type="text" placeholder="First name" onChange={e => this.handleChange({ e, id: "firstName" })} vaue={this.state.formData.firstName.value} />
                    <button>Create Account</button>
                </form>
            </div>


        </div>
    }
}

export default Register;