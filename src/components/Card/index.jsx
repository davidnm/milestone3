import React from 'react'
import './Card.css'

const Card = ({ flipped, onClick, matched, number, symbol }) => (
<div className="card" onClick={onClick} data-number={number} >
    {matched ? '✓' : flipped ? symbol : 'X'}
    </div>
)

export default Card;
