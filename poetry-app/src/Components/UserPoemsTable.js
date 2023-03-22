import React, { Component } from 'react';
import PoemTitleTD from './PoemTitleTD';

class UserPoemsTable extends Component {
    constructor(props) {
        super(props);
    }

    // TODO: have redux set up this.props.poems
    render() {
        return <UserlessPoemRows poems={this.props.poems} />
    }
}

const UserlessPoemRows = ({ poems }) => (
    <div>
        { poems.map(poem => 
            <tr>
                <PoemTitleTD poemtitle={poem.title} />
            </tr>    
        )}
    </div>
)

export default UserPoemsTable;