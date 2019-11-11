import React from "react";
import Layout from "./components/Hoc/layout";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/home";
import Register from "./components/Register/register";
import Login from "./components/Login/login";
import Dashboard from "./components/Dashboard/dashboard";
import Logout from "./components/Logout/logout";


const Routes = () => {

    return <div>

        <Layout>

            <Switch>

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