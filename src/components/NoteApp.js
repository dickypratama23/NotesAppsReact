import React, {Component} from 'react';
import Header from "./Header";
import NoteInput from "./NoteInput";
import NoteActive from "./NoteActive";
import NoteArchive from "./NoteArchive";

import {getInitialData} from "../utils";

class NoteApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getInitialData(),
            searchTitle: '',
        }

        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this);
    }

    onAddNoteHandler({title, body}) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: Date(),
                        archived: false
                    }
                ]
            }
        });
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({notes});
    }

    onArchiveHandler(id) {
        const notes = this.state.notes.map((note) => note.id === id ? {...note, archived: !note.archived} : note);
        this.setState({notes});
    }

    onSearchHandler(title) {
        this.setState(() => {
            return {
                searchTitle: title
            }
        })
    }

    render() {
        return (
            <div className="note-app">
                <Header onSearch={this.onSearchHandler}/>
                <div className={'note-app-container'}>
                    <NoteInput addNote={this.onAddNoteHandler}/>
                    <div className={'note-container'}>
                        <NoteActive
                            notes={this.state.notes}
                            searchTitle={this.state.searchTitle}
                            onDelete={this.onDeleteHandler}
                            onArchive={this.onArchiveHandler}
                        />
                        <NoteArchive
                            notes={this.state.notes}
                            searchTitle={this.state.searchTitle}
                            onDelete={this.onDeleteHandler}
                            onArchive={this.onArchiveHandler}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default NoteApp;