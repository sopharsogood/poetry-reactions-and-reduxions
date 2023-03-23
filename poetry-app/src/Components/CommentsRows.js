import React from 'react';
import AuthorTD from './AuthorTD';

const CommentsRows = ({ comments }) => (
    <div>
        { comments.map(comment => 
            <tr>
                <AuthorTD username={comment.user.username} userid={comment.user.id} />
                <td>{comment.contents}</td>
            </tr>    
        )}
    </div>
)

export default CommentsRows;