import React from 'react';
import AuthorTD from './AuthorTD';

const CommentsRows = ({ comments }) => (
    <div>
        { comments.map(comment => 
            <tr>
                <AuthorTD username={comment.author.username} userid={comment.author.id} />
                <td>{comment.content}</td>
            </tr>    
        )}
    </div>
)

export default CommentsRows;