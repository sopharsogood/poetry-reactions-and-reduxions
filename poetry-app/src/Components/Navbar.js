import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import UsernameLink from './UsernameLink';
import { connect } from 'react-redux';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let loginLogoutNav
        if (this.props.session.userid > 0) {
            loginLogoutNav = <div>
                    <UsernameLink username={this.props.session.username} userid={this.props.session.userid} /> | Log Out
                </div>
        } else {
            loginLogoutNav = "Login | Register"
        }
        return(
            <h5>
                {loginLogoutNav}
            </h5>
        )
    }
}

const mapStateToProps = state => {
    return {
        session: state.session
    };
};

export default connect(
    mapStateToProps
)(Navbar);