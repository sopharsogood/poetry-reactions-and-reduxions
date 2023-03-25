import React, { Component } from 'react';
import PoemsRows from './PoemsRows';
import { fetch_poems } from '../Actions/poemActions';

class PoemsTable extends Component {
    constructor(props) {
        super(props);
        this.state = { poems: [] }
    }

    componentDidMount() {
        fetch_poems()
            .then(data => {
                this.setState({
                  poems: data.poems
                })
            }
        )
    }
    
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
                <PoemsRows poems={this.state.poems} />
            </table>
        ) 
    }
}

export default PoemsTable;