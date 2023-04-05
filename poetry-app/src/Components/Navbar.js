import React, { Component } from 'react';
import UsernameLink from './UsernameLink';
import { connect } from 'react-redux';
import NavbarFormContainer from './NavbarFormContainer';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showingForm: ""
        }
    }

    handleOnClickLogin = () => {
        if (this.state.showingForm == "Login") {
            this.state.showingForm = ""
        } else {
            this.state.showingForm = "Login"
        }
    }

    handleOnClickNewPoem = () => {
        if (this.state.showingForm == "NewPoem") {
            this.state.showingForm = ""
        } else {
            this.state.showingForm = "NewPoem"
        }
    }

    handleOnClickRegister = () => {
        if (this.state.showingForm == "Register") {
            this.state.showingForm = ""
        } else {
            this.state.showingForm = "Register"
        }
    }

    render() {
        let loginLogoutNav
        if (this.props.session.userid > 0) {
            loginLogoutNav = <span>
                    <UsernameLink username={this.props.session.username} userid={this.props.session.userid} /> | <span onClick={this.handleOnClickNewPoem}>New Poem</span> | Log Out
                </span>
        } else {
            loginLogoutNav = <span>
                <span onClick={this.handleOnClickLogin}>Login</span> | <span onClick={this.handleOnClickRegister}>Register</span>
            </span>
        }
        return(
            <div>
                <h5>
                    {loginLogoutNav}
                </h5>
                <NavbarFormContainer showingForm={this.state.showingForm} />
            </div>
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