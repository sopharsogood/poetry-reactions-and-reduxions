import React, { Component } from 'react';

class UsernameLink extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="username-display" userid={this.props.userid}>
                {this.props.username}
            </div>
        )
    }
}

export default UsernameLink;