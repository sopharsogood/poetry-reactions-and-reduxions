import React, { Component } from 'react';
import { connect } from 'react-redux';

class NavbarFormContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {

    }
}
    
const mapStateToProps = state => {
    return {
        session: state.session
    };
};

export default connect(
    mapStateToProps
)(NavbarFormContainer);