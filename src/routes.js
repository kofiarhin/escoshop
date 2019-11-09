import React from "react";
import Layout from "./components/hoc/layout";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home/home";

const Routes = () => {

    return <div>

        <Layout>

            <Switch>

                <Route path="/" exact component={Home} />

            </Switch>

        </Layout>
    </div>
}

export default Routes;