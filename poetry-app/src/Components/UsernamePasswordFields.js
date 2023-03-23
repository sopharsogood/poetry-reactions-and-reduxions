import React, { Component } from 'react';

class UsernamePasswordFields extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <p>
                Username: <input type="text" name="username" id="username" /> <br />
                Password: <input type="password" name="password" id="password" />
            </p>
        )
    }
}

export default UsernamePasswordFields;