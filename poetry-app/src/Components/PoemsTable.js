import React, { Component } from 'react';
import PoemsRows from './PoemsRows';
import { fetch_poems } from '../Actions/poemActions';
import { connect } from 'react-redux';

class PoemsTable extends Component {
    constructor(props) {
        super(props);
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
                <PoemsRows poems={this.props.poems} />
            </table>
        ) 
    }
}
const mapStateToProps = state => {
    return {
        poems: state.poems
    };
};

export default connect(
  mapStateToProps
)(PoemsTable); 