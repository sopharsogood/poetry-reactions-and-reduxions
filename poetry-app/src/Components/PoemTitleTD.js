import React, { Component } from 'react';

class PoemTitleTD extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <td>
                {this.props.poemtitle}
            </td>
        )
    }
}

export default PoemTitleTD;