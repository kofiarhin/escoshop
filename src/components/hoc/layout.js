import React, { Component } from "react";
import "../../css/base.sass"


class Layout extends Component {

    render() {

        return <div>
            {this.props.children}
        </div>
    }
}

export default Layout;