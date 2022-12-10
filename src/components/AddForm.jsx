import React, { useState } from 'react'


export default function AddForm(props) {
    let [note, setNote] = useState({
        title: '',
        content: ''
    });

    function changeHandler(event) {
        const { name, value } = event.target;
        setNote(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        });
    }

    function submitNote(event) {
        props.addHandler(note)
        setNote({
            title: '',
            content: ''
        })
        event.preventDefault();
    }

    return (
        <div className="add-form-container">
            <div className="add-form">
                <input
                    placeholder="Enter title..."
                    type="text"
                    name="title"
                    onChange={changeHandler}
                    value={note.title} />
                <textarea
                    placeholder="Enter content..."
                    type="text"
                    name="content"
                    rows="7"
                    onChange={changeHandler}
                    value={note.content} />

                <button onClick={submitNote}>Add</button>
            </div>
        </div>
    )
}
