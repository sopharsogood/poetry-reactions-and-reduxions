import React, { Component } from 'react';

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

export default ShowPoemContainer;