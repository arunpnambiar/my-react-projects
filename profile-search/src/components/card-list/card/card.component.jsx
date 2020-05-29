import React from 'react'
import '../card-list.style.css'

export const Card = (props)=>(
    <div className="card-container">{props.name}</div>
);