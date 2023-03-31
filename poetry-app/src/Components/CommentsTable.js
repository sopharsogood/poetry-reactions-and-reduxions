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
                <th>
                    <td>
                        User
                    </td>
                    <td>
                        Comment
                    </td>
                </th>
                <CommentsRows comments={this.props.comments} />
            </table>
        ) 
    }
}

export default CommentsTable;