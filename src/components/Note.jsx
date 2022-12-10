import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

export default function Note(props) {
  return (
    <div className='note-item'>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <button
        onClick={() => props.deleteHandler(props.id)}>
        <DeleteIcon />
      </button>
    </div>
  )
}
