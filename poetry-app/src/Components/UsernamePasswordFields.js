import React, { Component } from 'react';

class UsernamePasswordFields extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <p>
                Username: <input type="text" name="username" id="username" onChange={event => this.props.handleChange(event)} value={this.props.formData.username} /> <br />
                Password: <input type="password" name="password" id="password" onChange={event => this.props.handleChange(event)} value={this.props.formData.password} />
            </p>
        )
    }
}

export default UsernamePasswordFields;