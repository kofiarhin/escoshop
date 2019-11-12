import React, { Component } from "react";
import Header from "../Header/header";
import _ from "lodash";
import { firebase } from "../../firebase";

class Add extends Component {

    state = {

        errors: [],
        formData: {
            name: {
                required: true,
                value: ""
            },
            description: {
                required: true,
                value: ""
            },
            price: {
                required: true,
                value: ""
            },
            category: {
                required: true,
                value: ""
            }
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

    handleSubmit = event => {

        event.preventDefault();

        let dataToSubmit = {}
        let errors = [];
        const formData = this.state.formData;

        for (let key in formData) {

            dataToSubmit[key] = formData[key].value

            //check if item is empty
            if (formData[key].required && formData[key].value === "") {

                errors.push(`${key} is required`)
            }
        }


        if (!_.isEmpty(errors)) {

            return this.setState({

                errors
            })
        }

        //add product
        firebase.database().ref('products').push(dataToSubmit).then(() => {

            console.log("product added");
        })

    }

    renderErrors = errors => {

        return (!_.isEmpty(errors)) ? errors.map(error => {

            return <p className="error"> {error}</p>
        }) : null;

    }


    render() {

        return <div>

            <Header />
            <h1 className="maint-title text-center"> Add Product</h1>
            <div className="form-wrapper">

                <form onSubmit={this.handleSubmit}>

                    <input type="text" placeholder="Product Name" onChange={(event => this.handleChange({ event, id: "name" }))} value={this.state.formData.name.value} />
                    <textarea placeholder="Enter description"

                        onChange={(event) => this.handleChange({ event, id: "description" })}
                        value={this.state.formData.description.value} />
                    <input type="text" placeholder="Price" onChange={event => this.handleChange({ event, id: "price" })} value={this.state.formData.price.value} />
                    <select

                        onChange={event => this.handleChange({ event, id: "category" })}
                    >
                        <option> Select Category</option>
                        <option value="electronics"> Electronics</option>
                        <option value="baby-product"> Baby Product</option>
                        <option value="computing"> Computing</option>
                        <option value="Fashion"> Fashion</option>

                    </select>

                    {this.renderErrors(this.state.errors)}
                    <button> Add Product</button>
                </form>

            </div>
        </div>
    }
}


export default Add;