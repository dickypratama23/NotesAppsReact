import React from 'react';

function NoteItemButton({id, archived, onDelete, onArchive}) {
    return (
        <div className={'note-button'}>
            <button className={'btn-delete'} onClick={() => onDelete(id)}><i className="fa fa-trash"></i> Hapus</button>
            <button className={'btn-archive'} onClick={() => onArchive(id)}>
                {
                    archived ? (
                        <>
                            <i className="fa fa-folder-open"></i> Pindahkan
                        </>
                    ) : (
                        <>
                            <i className="fa fa-archive"></i> Arsipkan
                        </>
                    )
                }
            </button>
        </div>
    )
}

export default NoteItemButton;