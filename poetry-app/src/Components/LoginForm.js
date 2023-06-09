import React, { Component } from 'react';
import UsernamePasswordFields from './UsernamePasswordFields';

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

    render() {
        return(
            <div>
                <h2>
                    Log In:
                </h2>
                <form>
                    <UsernamePasswordFields formData={this.state} handleChange={this.handleChange} />
                    <input type="submit" value="Log In" />
                </form>
            </div>
        )
    }
}

export default LoginForm;