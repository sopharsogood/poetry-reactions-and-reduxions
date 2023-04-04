import React, { Component } from 'react';

class UsernameLink extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let usernameLinkClass
        if (this.props.session.userid == this.props.userid) {
            usernameLinkClass = "username-display-self"
        } else {
            usernameLinkClass = "username-display-other"
        }
        return(
            <div className={usernameLinkClass}>
                {this.props.username}
            </div>
        )
    }
}

export default UsernameLink;