import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import UsernameLink from './UsernameLink';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let loginLogoutNav
        if (this.props.is_logged_in) {
            loginLogoutNav = <div>
                    <UsernameLink username={this.props.user.username} userid={this.props.user.userid} /> | Log Out
                </div>
        } else {
            loginLogoutNav = "Login | Register"
        }
        return(
            <h5>
                <NavLink to="/">
                    Home
                </NavLink> | {loginLogoutNav}
            </h5>
        )
    }
}

export default Navbar;