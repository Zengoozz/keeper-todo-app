import React, { useState } from 'react'
import Note from "./Note";
import notes from "../notes";
import AddForm from './AddForm';
import PostAddIcon from '@mui/icons-material/PostAdd';

export default function NotesList(props) {
    let [notesList, setList] = useState([...notes]);
    let [isSwitch, setSwitch] = useState(false);

    function addHandler(newNote) {
        setList(prevValue => [...prevValue, newNote])
        setSwitch(false)
    }

    function deleteHandler(id) {
        setList(notesList.filter((note, index) => index !== id))
    }

    function toggleSwitch() {
        setSwitch(true)
    }

    return (
        <div className="home">
            {isSwitch ? <AddForm
                addHandler={addHandler} /> :
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
                </div>}
            <button
                className="add-btn"
                onClick={toggleSwitch}>
                <PostAddIcon />
            </button>
        </div>
    )
}
