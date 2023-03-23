import React, { Component } from 'react';

class UsernamePasswordFields extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <p>
                Username: <input type="text" name="username" id="username" onChange={event => this.props.handleChange(event)} value={this.props.formData} /> <br />
                Password: <input type="password" name="password" id="password" onChange={event => this.props.handleChange(event)} value={this.props.formData} />
            </p>
        )
    }
}

export default UsernamePasswordFields;