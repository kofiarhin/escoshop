import React, { Component } from "react";
import Header from "../Header/header";
import { firebase, firebaseLooper } from "../../firebase";
import _ from "lodash";
import "./orders.sass"

class Orders extends Component {

    state = {

        orders: []
    }

    async componentDidMount() {


        const userData = JSON.parse(sessionStorage.getItem('user'));

        // console.log(userData);
        const orders = await firebase.database().ref('orders').once("value").then(snapshot => {

            return firebaseLooper(snapshot)
        });

        const userOrder = orders.filter(order => {

            return userData.id === order.userData.id;
        });

        if (!_.isEmpty(userOrder)) {

            this.setState({

                orders: userOrder
            })
        }
    }

    renderOrder = orders => {

        if (!_.isEmpty(orders)) {

            return orders.map(order => {

                return order.items.map(item => {

                    console.log(item)

                    return <div className="product-unit">

                        <div className="cover" style={{
                            backgroundImage: `url(${item.product.fileData.fileUrl})`
                        }}> </div>
                        <div className="content">
                            <h2> {item.product.name}</h2>
                            <p> Price: GHC {item.product.price}</p>

                        </div>

                    </div>
                })
            })
        }
    }
    render() {

        return <div>

            <Header />
            <h1 className="main-title text-center"> Order History!</h1>
            {this.renderOrder(this.state.orders)}
        </div>
    }
}

export default Orders;