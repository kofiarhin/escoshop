import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./header.sass"

class Header extends Component {

    render() {

        return <div>

            <header className="main-header">

                <div className="container">


                    <h1 className="logo"><Link to="/">Logo</Link> </h1>
                    <nav>
                        <Link to="/login"> Login</Link>
                        <Link to="/register"> Register </Link>
                        <Link to="/cart"> Cart </Link>
                    </nav>
                </div>


            </header>

        </div>
    }
}

export default Header;