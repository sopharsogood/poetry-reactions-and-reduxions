import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

class UsernameLink extends Component {
    constructor(props) {
        super(props);
    }

    render {
        return(
            <NavLink to={"/user/" + this.props.userid}>{this.props.username}</Link>
        )
    }
}

export default UsernameLink;