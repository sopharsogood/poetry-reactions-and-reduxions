import React, { Component } from 'react';
import AuthorTD from './AuthorTD';

class CommentsRows extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(<React.Fragment>
            { this.props.comments.map((comment) => 
                <tr key={comment.id}>
                    <AuthorTD username={comment.author.username} userid={comment.author.id} />
                    <td>{comment.content}</td>
                </tr>    
            )}
        </React.Fragment>)
    }
}

export default CommentsRows;