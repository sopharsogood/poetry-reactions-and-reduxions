import React, { Component } from 'react';

class DisplayPoem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h1>{this.props.poem.title}</h1>
                <h4>by <UsernameLink user={this.props.poem.author} /></h4>
                <p>{this.props.poem.contents}</p>
            </div>
        )
    }
}

export default DisplayPoem;