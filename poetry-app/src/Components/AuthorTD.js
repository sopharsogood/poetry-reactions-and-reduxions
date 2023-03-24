import React, { Component } from 'react';
import UsernameLink from './UsernameLink';

class AuthorTD extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <td>
                <UsernameLink username={this.props.username} userid={this.props.userid} />
            </td>
        )
    }
}

export default AuthorTD;