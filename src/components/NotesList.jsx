import React, { useState } from 'react'
import '../stylesheets/notes.css'
import Note from "./Note";
import notes from "../notes";
import AddForm from './AddForm';
import PostAddIcon from '@mui/icons-material/PostAdd';

export default function NotesList(props) {
    let [notesList, setList] = useState([...notes]);
    let [showForm, setShow] = useState(false);

    function addHandler(newNote) {
        setList(prevValue => [...prevValue, newNote])
        setShow(false)
    }

    function deleteHandler(id) {
        setList(notesList.filter((note, index) => index !== id))
    }

    const button = document.getElementsByClassName('add-btn')

    function toggleSwitch(event) {
        button[0].style['display'] = 'none'
        setShow(true);
    }


    function closeModal(event) {
        if (event.target.className === 'add-form-container') {
            setShow(false)
            button[0].style['display'] = 'inline'
        }
    }

    return (
        <div className="home">
            {showForm && <AddForm
                closeModal={closeModal}
                addHandler={addHandler}
            />}
            <div className="notes-container">
                {props.isLogged && notesList.map((noteItem, index) => (
                    <Note
                        key={index}
                        id={index}
                        title={noteItem.title}
                        content={noteItem.content}
                        deleteHandler={deleteHandler}
                    />
                ))}
            </div>
            <button
                className="add-btn"
                onClick={toggleSwitch}>
                <PostAddIcon />
            </button>
        </div>
    )
}
