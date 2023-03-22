import React from 'react';
import PoemTitleTD from './PoemTitleTD';

const UserPoemsRows = ({ poems }) => (
    <div>
        { poems.map(poem => 
            <tr>
                <PoemTitleTD poemtitle={poem.title} />
            </tr>    
        )}
    </div>
)

export default UserPoemsRows;