import React, { Component } from "react";
import Header from "../Header/header";
import { firebase, firebaseLooper } from "../../firebase";
import _ from "lodash";
import { Link } from "react-router-dom";
import Search from "../Prouducts/Search/search";

class Home extends Component {


    state = {

        products: [],
        result: []
    }

    async componentDidMount() {

        //get products from database

        const products = await firebase.database().ref('products').once("value").then(snapshot => {

            return firebaseLooper(snapshot)
        })

        if (!_.isEmpty(products)) {

            this.setState({
                products
            })
        }

    }


    renderProducts = products => {


        return products ? products.map(product => {

            return <Link to={`/product/${product.id}`} className="product-unit">

                <div className="cover" style={{
                    width: "200px",
                    height: "200px",
                    backgroundImage: `url(${product.fileData.fileUrl})`,
                    backgroundSize: "cover"
                }}></div>
                <div className="content">
                    <h2 className="name">Name: {product.name} </h2>
                    <p className="price">Price: {product.price} </p>
                </div>
            </Link>
        }) : null;
    }

    saveResult = result => {

        if (!_.isEmpty(result)) {

            this.setState({

                result
            })
        }
    }


    renderItems = () => {


        console.log("render items")
        const result = this.state.result;
        const products = this.state.products;

        return (!_.isEmpty(result)) ? this.renderProducts(result) : this.renderProducts(products);
    }
    render() {

        return <div>

            <Header />

            <Search products={this.state.products} saveResult={result => this.saveResult(result)} />

            <div className="product-wrapper">{this.renderItems()} </div>


        </div>
    }
}

export default Home;