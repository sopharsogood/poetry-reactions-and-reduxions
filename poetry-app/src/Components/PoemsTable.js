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
                  poems: data
                })
            }
        )
    }
    
    render() {
        return(
            <table>
                <tr>
                    <th>
                        Author
                    </th>
                    <th>
                        Title
                    </th>
                </tr>
                <PoemsRows poems={this.state.poems} />
            </table>
        ) 
    }
}

export default PoemsTable;