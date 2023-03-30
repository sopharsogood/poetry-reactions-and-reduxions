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

const mapStateToProps = state => {
    return {
        showpoemId: state.showpoem.id
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadShowpoemAndComments: (showpoem) => dispatch(loadShowpoemAndComments(showpoem))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(PoemTitleTD); 