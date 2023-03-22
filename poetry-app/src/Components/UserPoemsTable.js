import React, { Component } from 'react';
import UserPoemsRows from './UserPoemsRows';

class UserPoemsTable extends Component {
    constructor(props) {
        super(props);
    }

    // TODO: have redux set up this.props.poems
    render() {
        return <UserPoemsRows poems={this.props.poems} />
    }
}

export default UserPoemsTable;