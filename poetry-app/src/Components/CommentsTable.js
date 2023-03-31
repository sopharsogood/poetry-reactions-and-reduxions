import React, { Component } from 'react';
import CommentsRows from './CommentsRows';

class CommentsTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.comments)
        return(
            <table>
                <tr>
                    <th>
                        User
                    </th>
                    <th>
                        Comment
                    </th>
                </tr>
                <CommentsRows comments={this.props.comments} />
            </table>
        ) 
    }
}

export default CommentsTable;