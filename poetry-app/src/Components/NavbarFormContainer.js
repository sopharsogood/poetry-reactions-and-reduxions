import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import NewPoemForm from './NewPoemForm';
import RegisterForm from './RegisterForm';

class NavbarFormContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let formToShow
        if (this.props.session.userid > 0 && this.props.showingForm == "NewPoem") {
            formToShow = <NewPoemForm />
        } else if (this.props.session.userid = 0 && this.props.showingform == "Login") {
            formToShow = <LoginForm />
        } else if (this.props.session.userid = 0 && this.props.showingform == "Register") {
            formToShow = <RegisterForm />
        }

        return(
            {formToShow}
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
)(NavbarFormContainer);