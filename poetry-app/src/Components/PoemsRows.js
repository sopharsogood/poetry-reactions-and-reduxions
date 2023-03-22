import React from 'react';
import PoemTitleTD from './PoemTitleTD';
import UsernameLink from './UsernameLink';

const PoemsRows = ({ poems }) => (
    <div>
        { poems.map(poem => 
            <tr>
                <td>
                    <UsernameLink username={poem.user.username} id={poem.user.id} />
                </td>
                <PoemTitleTD poemtitle={poem.title} />
            </tr>    
        )}
    </div>
)

export default PoemsRows;