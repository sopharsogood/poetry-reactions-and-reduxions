import React, { Component } from 'react';
import UsernamePasswordFields from './UsernamePasswordFields';

class LoginForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h2>
                    Log In:
                </h2>
                <form>
                    <UsernamePasswordFields />
                    <input type="submit" value="Log In"/>
                </form>
            </div>
        )
    }
}

export default LoginForm;