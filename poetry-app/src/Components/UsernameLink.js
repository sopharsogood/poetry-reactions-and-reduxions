import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class UsernameLink extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <NavLink to={"/user/" + this.props.user.userid}>
                {this.props.user.username}
            </NavLink>
        )
    }
}

export default UsernameLink;