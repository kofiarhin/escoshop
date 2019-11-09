import React from "react";
import Layout from "./components/Hoc/layout";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/home";
const Routes = () => {

    return <div>

        <Layout>

            <Switch>

                <Route exact component={Home} />

            </Switch>

        </Layout>
    </div>
}

export default Routes;