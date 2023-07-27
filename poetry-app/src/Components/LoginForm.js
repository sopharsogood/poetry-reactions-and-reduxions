import React, { Component } from 'react';
import UsernamePasswordFields from './UsernamePasswordFields';
import { attemptLogin } from '../Actions/sessionActions';
import { connect } from 'react-redux';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.attemptRegister(this.state);
    };

    render() {
        return(
            <div>
                <h2>
                    Log In:
                </h2>
                <form onSubmit={this.handleSubmit}>
                    <UsernamePasswordFields formData={this.state} handleChange={this.handleChange} />
                    <input type="submit" value="Log In" />
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        attemptLogin: (credentials) => dispatch(attemptLogin(credentials))
    };
};

export default connect(
    null,
    mapDispatchToProps    
)(LoginForm);