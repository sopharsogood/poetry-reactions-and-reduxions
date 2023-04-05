import React, { Component } from 'react';
import { connect } from 'react-redux';

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

const mapStateToProps = state => {
    return {
        session: state.session
    };
};

export default connect(
    mapStateToProps
)(UsernameLink);