import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import UsernameLink from './UsernameLink';
import { connect } from 'react-redux';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state.showingForm = ""
    }



    render() {
        let loginLogoutNav
        if (this.props.session.userid > 0) {
            loginLogoutNav = <span>
                    <UsernameLink username={this.props.session.username} userid={this.props.session.userid} /> | <span onClick={handleOnClickNewPoem}>New Poem</span> | Log Out
                </span>
        } else {
            loginLogoutNav = <span>
                <span onClick={handleOnClickLogin}>Login</span> | <span onClick={handleOnClickRegister}>Register</span>
            </span>
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