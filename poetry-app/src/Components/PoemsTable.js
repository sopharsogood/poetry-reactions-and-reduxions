import React, { Component } from 'react';
import PoemsRows from './PoemsRows';
import { fetch_poems, loadPoems } from '../Actions/poemActions';
import { connect } from 'react-redux';

class PoemsTable extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        fetch_poems()
            .then(poems => this.props.loadPoems(poems))
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

const mapDispatchToProps = dispatch => {
    return {
        loadPoems: (poems) => dispatch(loadPoems(poems))
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PoemsTable); 