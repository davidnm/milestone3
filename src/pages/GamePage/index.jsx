import React from "react";
import { Card } from "../../components";
import './GamePage.css'

const GamePage = ({ deck = [], onClick, onReset, counter }) => (
  <div className='game-page'>
  <div className='deck'>
    {deck.map((card, i) => (
      <Card key={i} number={i} {...card} onClick={onClick}  />
    ))}
  </div>
   <button onClick={onReset}>Reset</button>
   </div>

);

export default GamePage;
