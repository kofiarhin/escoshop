import React from "react";
import Layout from "./components/Hoc/layout";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/home";
import Register from "./components/Register/register";
import Login from "./components/Login/login";
import Dashboard from "./components/Dashboard/dashboard";
import Logout from "./components/Logout/logout";
import AddProduct from "./components/Prouducts/add";
import Product from "./components/Prouducts/product/product";
import Profile from './components/User/profile';
import Cart from "./components/Cart/cart";
import Orders from "./components/Orders/orders";

const Routes = () => {

    return <div>

        <Layout>

            <Switch>

                <Route path="/product/:id" exact component={Product} />
                <Route path="/products/add" exact component={AddProduct} />
                <Route path="/user/profile" exact component={Profile} />
                <Route path="/orders" exact component={Orders} />
                <Route path="/cart" exact component={Cart} />
                <Route path="/logout" exact component={Logout} />
                <Route path="/register" exact component={Register} />
                <Route path="/login" exact component={Login} />
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/" exact component={Home} />

            </Switch>

        </Layout>
    </div>
}

export default Routes;