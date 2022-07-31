import React from 'react';
import NoteItem from "./NoteItem";

function NoteArchive({notes, onDelete, onArchive, searchTitle}) {

    const renderNotes = () => {
        const hasNotes = notes.filter(note => note.archived && note.title.toLowerCase().includes(searchTitle)).length;
        if (hasNotes > 0) {
            return notes.filter(note => note.archived && note.title.toLowerCase().includes(searchTitle)).map((note) => (
                <NoteItem
                    key={note.id}
                    id={note.id}
                    onDelete={onDelete}
                    onArchive={onArchive}
                    {...note}
                />
            ));
        } else {
            return (
                <div className={'empty'}>Catatan Tidak Ada</div>
            )
        }
    }

    return (
        <div className={'note note-list'}>
            <h2>Archive Note</h2>
            <div className={'note-item-container'}>
                {renderNotes()}
            </div>
        </div>
    );
}


export default NoteArchive;