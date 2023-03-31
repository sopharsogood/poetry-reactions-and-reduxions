import React, { Component } from 'react';
import UsernameLink from './UsernameLink';

class DisplayPoem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h1>{this.props.poem.title}</h1>
                <h4>by <UsernameLink username={this.props.poem.author.username} userid={this.props.poem.author.userid} /></h4>
                <p>{this.props.poem.content}</p>
            </div>
        )
    }
}

export default DisplayPoem;