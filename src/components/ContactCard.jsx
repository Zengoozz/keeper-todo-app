import React from 'react'

export default function ContactCard(props) {
    return (
        <div className='card'>
            <div className="top">
                <h2 className='name'>{props.name}</h2>
                <img className='circle-img' src={props.image} alt="avatar" />
            </div>
            <div className="bottom">
                <p className='info'>{props.phone}</p>
                <p className='info'>{props.email}</p>
            </div>
        </div>
    )
}
