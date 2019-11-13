import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./header.sass"
import _ from "lodash";
import { withRouter } from "react-router-dom";

class Header extends Component {


    state = {

        user: []
    }

    componentDidMount() {

        const user = JSON.parse(sessionStorage.getItem("user"));

        if (!_.isEmpty(user)) {

            this.setState({

                user
            })
        }
    }


    handleLogout = () => {

        const userData = sessionStorage.getItem("user");

        if (userData) {

            sessionStorage.removeItem('user');
            this.setState({
                user: []
            })

            this.props.history.push("/login")


        }
    }

    renderCartLen = () => {

        const cart = JSON.parse(sessionStorage.getItem('cart'));

        if (!_.isEmpty(cart)) {

            return <span> ({cart.length}) </span>;
        }
    }
    renderLinks = () => {

        const user = this.state.user;

        return (!_.isEmpty(user)) ? <nav>

            <Link to="/user/profile" style={{
                textTransform: "capitalize"
            }}> Hi, {user.firstName}</Link>
            <Link to="/dashboard"> Dashboard</Link>
            <Link to="/cart"> Cart{this.renderCartLen()}</Link>
            <button className="logout-cta" onClick={this.handleLogout}>Logout</button>
        </nav>


            : <nav>

                <Link to="/"> Home</Link>
                <Link to="/login"> Login</Link>
                <Link to="/register">Register</Link>
            </nav>


    }


    render() {

        return <div>

            <header className="main-header">

                <div className="container">


                    <h1 className="logo"><Link to="/">Logo</Link> </h1>
                    {this.renderLinks()}
                </div>


            </header>

        </div>
    }
}

export default withRouter(Header); 