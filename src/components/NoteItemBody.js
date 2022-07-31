import React from 'react';

function NoteItemBody({body}) {
    return (
        <div className={'note-body'}>
            {body}
        </div>
    )
}

export default NoteItemBody;