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
        } else if (this.props.session.userid == 0 && this.props.showingForm == "Login") {
            formToShow = <LoginForm />
        } else if (this.props.session.userid == 0 && this.props.showingForm == "Register") {
            formToShow = <RegisterForm />
        }

        return(
            <div>
                {formToShow}
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
)(NavbarFormContainer);