import React from 'react';
import NoteItemTitle from "./NoteItemTitle";
import NoteItemBody from "./NoteItemBody";
import NoteItemButton from "./NoteItemButton";

function NoteItem({id, title, body, createdAt, archived, onDelete, onArchive}) {
    return (
        <div className={'note-item'}>
            <NoteItemTitle title={title} date={createdAt}/>
            <NoteItemBody body={body}/>
            <NoteItemButton id={id} archived={archived} onDelete={onDelete} onArchive={onArchive}/>
        </div>
    )
}

export default NoteItem;