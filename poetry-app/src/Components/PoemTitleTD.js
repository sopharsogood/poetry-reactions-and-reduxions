import React, { Component } from 'react';
import { fetchShowpoemAndComments } from '../Actions/showpoemActions';
import { loadShowpoemAndComments } from '../Actions/showpoemActions';

class PoemTitleTD extends Component {
    constructor(props) {
        super(props);
    }

    handleOnClick = event => {
        fetchShowpoemAndComments(this.props.poemid)
            .then(showpoem => this.props.loadShowpoemAndComments(showpoem))
    }

    render() {
        return(
            <td onClick={this.handleOnClick}>
                {this.props.poemtitle}
            </td>
        )
    }
}

export default PoemTitleTD;