import React, { Component } from "react";
import Header from "../../Header/header";
import { firebase } from "../../../firebase";
import _ from "lodash";
import "./product.sass";
import { genDate } from "../../../config";
import { Link } from "react-router-dom";


class Product extends Component {


    state = {
        product: null,
        loggedIn: false,
        userData: null,
        addSuccess: false,
        error: ""
    }

    componentDidMount() {


        // check if user is logged in

        const userData = JSON.parse(sessionStorage.getItem("user"));

        const id = this.props.match.params.id;

        firebase.database().ref(`products/${id}`).once("value").then(snapshot => {


            this.setState({
                product: { id: snapshot.key, ...snapshot.val() },
                userData
            })
        })
    }

    addToCart = product => {

        const cart = JSON.parse(sessionStorage.getItem("cart"));
        const userData = this.state.userData;

        let dataToSubmit = {
            product,
            createdOn: genDate()
        }

        if (!_.isEmpty(cart)) {

            const itemId = this.props.match.params.id;
            const item = cart.find(cartItem => {

                return cartItem.product.id == itemId
            })

            //fiter through cart to get item
            if (!item) {

                cart.push(dataToSubmit);
                sessionStorage.setItem("cart", JSON.stringify(cart));
                this.setState({
                    addSuccess: true,
                    error: ""
                })
            } else {

                this.setState({

                    error: "item already added"
                })
            }

            //check if item was found


        } else {

            let data = [];
            data.push(dataToSubmit)
            sessionStorage.setItem("cart", JSON.stringify(data));
            this.setState({
                addSuccess: true
            })
        }


    }


    renderCta = () => {



        const userData = this.state.userData;

        return userData ? <button className="cta" onClick={() => this.addToCart(this.state.product)}>  Add to Cart</button> : null;
    }

    renderContinue = () => {

        const addSuccess = this.state.addSuccess;

        return addSuccess ? <Link to='/'> Continue Shopping </Link> : null;
    }

    renderError = error => {

        return error ? <p> {error}</p> : null;
    }
    renderProduct = product => {

        return (!_.isEmpty(product)) ? <div className="product-container">

            {this.renderError(this.state.error)}
            <div className="cover" style={{
                backgroundImage: `url(${product.fileData.fileUrl})`,
            }}> </div>
            <div className="content">
                <h2 className="name"> {product.name}</h2>
                <p className="desc"> {product.description}</p>
                <p className="price"> GHC <span>{product.price}</span> </p>
                {this.renderCta()}
                {this.renderContinue()}
            </div>

        </div> : null;
    }




    render() {

        console.log(this.state);
        return <div>

            <Header />

            {this.renderProduct(this.state.product)}

        </div>
    }
}

export default Product;