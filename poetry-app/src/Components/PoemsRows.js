import React from 'react';
import PoemTitleTD from './PoemTitleTD';
import AuthorTD from './AuthorTD';

const PoemsRows = ({ poems }) => (
    <div>
        { poems.map(poem => 
            <tr>
                <AuthorTD username={poem.user.username} userid={poem.user.id} />
                <PoemTitleTD poemtitle={poem.title} />
            </tr>    
        )}
    </div>
)

export default PoemsRows;