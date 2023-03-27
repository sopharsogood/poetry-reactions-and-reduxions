import React, { Component } from 'react';
import PoemTitleTD from './PoemTitleTD';
import AuthorTD from './AuthorTD';

class PoemsRows extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(<React.Fragment>
            { this.props.poems.map((poem) => 
                <tr key={poem.id}>
                    <AuthorTD username={poem.author.username} userid={poem.author.id} />
                    <PoemTitleTD poemtitle={poem.title} />
                </tr>   
            )}
        </React.Fragment>)
    }
}

export default PoemsRows;