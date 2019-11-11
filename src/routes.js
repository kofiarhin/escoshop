import React from "react";
import Layout from "./components/Hoc/layout";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/home";
import Register from "./components/Register/register";
const Routes = () => {

    return <div>

        <Layout>

            <Switch>

                <Route exact component={Register} />
                <Route exact component={Home} />

            </Switch>

        </Layout>
    </div>
}

export default Routes;