import React from 'react';
import {showFormattedDate} from "../utils";

function NoteItemTitle({title, date}) {
    return (
        <div className={'note-title-date'}>
            <p className={'note-title'}>{title}</p>
            <p className={'note-date'}>{showFormattedDate(date)}</p>
        </div>
    )
}

export default NoteItemTitle;