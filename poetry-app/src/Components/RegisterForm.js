import React, { Component } from 'react';
import UsernamePasswordFields from './UsernamePasswordFields';
import { attemptRegister } from '../Actions/sessionActions';
import { connect } from 'react-redux';

class RegisterForm extends Component {
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
                    Register:
                </h2>
                <form onSubmit={this.handleSubmit}>
                    <UsernamePasswordFields formData={this.state} handleChange={this.handleChange} />
                    <input type="submit" value="Register" />
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        attemptRegister: (credentials) => dispatch(attemptRegister(credentials))
    };
};

export default connect(
    null,
    mapDispatchToProps    
)(RegisterForm);