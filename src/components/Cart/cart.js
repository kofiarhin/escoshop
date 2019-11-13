import React from "react";
import Header from "../Header/header";
import _ from "lodash";
import "./cart.sass";
import { firebase } from "../../firebase"


const Cart = props => {

    const items = JSON.parse(sessionStorage.getItem("cart"));
    const renderTotal = items => {

        let total = 0;

        if (!_.isEmpty(items)) {

            items.forEach(item => {

                const price = parseInt(item.product.price);

                total += price

            });

            return <div className="total"> Total: GHC {total} </div>
        }


    }
    const renderCart = () => {

        const userData = JSON.parse(sessionStorage.getItem("user"));

        if (!_.isEmpty(items)) {

            return items.map(item => {
                return <div className="product-unit">

                    <div className='cover' style={{
                        backgroundImage: `url(${item.product.fileData.fileUrl})`
                    }}> </div>
                    <div className="content">
                        <h2 className="name"> {item.product.name}</h2>
                        <p className="price">GHC {item.product.price} </p>

                    </div>
                </div>
            })
        } else {

            return <div> Cart is empty </div>
        }


    }


    const placeOrder = () => {

        let dataToSubmit = {
            items,
            userData: JSON.parse(sessionStorage.getItem("user"))
        }

        firebase.database().ref('orders').push(dataToSubmit).then(() => {

            console.log("order place");
            sessionStorage.removeItem("cart");

            props.history.push("/dashboard")

        })
    }
    const renderCta = () => {

        return items ? <div className="order" onClick={() => placeOrder()}> Place Order </div> : null;
    }
    return <div>

        <Header />
        <div className="cart-wrapper">

            {renderCart()}
            {renderTotal(items)}

            {renderCta()}
        </div>
    </div>
}

export default Cart;