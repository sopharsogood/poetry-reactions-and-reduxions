import React, { Component } from 'react';
import PoemsRows from './PoemsRows';

class PoemsTable extends Component {
    constructor(props) {
        super(props);
    }

    // TODO: have redux set up this.props.poems
    render() {
        return(
            <table>
                <th>
                    <td>
                        Author
                    </td>
                    <td>
                        Title
                    </td>
                </th>
                <PoemsRows poems={this.props.poems} />
            </table>
        ) 
    }
}

export default PoemsTable;