import React, { Component } from 'react';
import PoemsRows from './PoemsRows';

class PoemsTable extends Component {
    constructor(props) {
        super(props);
    }

    // TODO: have redux set up this.props.poems
    render() {
        return <PoemsRows poems={this.props.poems} />
    }
}

export default PoemsTable;