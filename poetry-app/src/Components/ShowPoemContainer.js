import React, { Component } from 'react';
import DisplayPoem from './DisplayPoem'; 
import CommentsTable from './CommentsTable';
import { connect } from 'react-redux';

class ShowPoemContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <DisplayPoem poem={this.props.poem} />
                <CommentsTable comments={this.props.poem.comments} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        poem: state.showpoem
    };
};

export default connect(
    mapStateToProps
)(ShowPoemContainer);