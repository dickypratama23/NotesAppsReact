import React, {Component} from 'react';

class NoteInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        let charAllowed = 50;

        if (charAllowed < event.target.value.length) {
            return;
        }

        this.setState(() => {
            return {
                title: event.target.value,
            }
        })
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        })
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
        this.setState({
            title: '',
            body: ''
        });
    }

    render() {
        let limitChar = 50;
        limitChar -= this.state.title.length;

        return (
            <div className={'note note-input'}>
                <h2>Create Note</h2>
                <span>Sisa Karakter : {limitChar}</span>
                <form className={'form-note'} onSubmit={this.onSubmitEventHandler}>
                    <input type="text" placeholder={'Judul Catatan ...'} value={this.state.title}
                           onChange={this.onTitleChangeEventHandler} required/>
                    <textarea placeholder={'Tulis Catatan ...'} value={this.state.body}
                              onChange={this.onBodyChangeEventHandler} required></textarea>
                    <input type="submit" value={'Buat Catatan'}/>
                </form>
            </div>
        );
    }
}

export default NoteInput;