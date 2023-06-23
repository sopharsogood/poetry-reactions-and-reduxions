import React, { Component } from 'react';
import UsernamePasswordFields from './UsernamePasswordFields';

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

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.loginUser(this.state);
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

export default RegisterForm;