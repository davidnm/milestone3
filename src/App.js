import React, { useState } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { HomePage, GamePage, SettingsPage } from "./pages";
import { symbols } from "./constants";
import { createDeck, shuffle } from "./utilities";

const allCards = symbols.concat(symbols);
var clickedCardPrevious=-1;
var counter = 0;

function App() {
  const createNewDeck = () => createDeck (shuffle(allCards));
  const [deck, setDeck] = useState(createNewDeck());
  const onReset = () => {
    setDeck(createNewDeck());
    counter=0;
  }


  const onClick = (e) => {
    counter++;
     const clickedCard = +e.target.dataset.number
    setDeck(
      deck.map((card, i) => 
    i !==clickedCard ? card : {...card, flipped: !card.flipped}
    ),
    )
    if (clickedCardPrevious!==-1 && deck[clickedCardPrevious].symbol ===deck[clickedCard].symbol){
      deck[clickedCardPrevious].matched=true;
      setTimeout(() => {
      setDeck(
        deck.map((card, i) => 
      (i===clickedCard) ? {...card, matched: true} : card
      ),
      )},200);

    }else if (clickedCardPrevious!==-1 && deck[clickedCardPrevious].symbol !==deck[clickedCard].symbol){
      
      setTimeout(() => {  
      setDeck(
        deck.map((card, i) => 
      card = {...card, flipped: false}
      ),
      )},1000);

    }


    clickedCardPrevious = clickedCard;
    if(counter%2===0){
      clickedCardPrevious=-1;
    }
    console.log(clickedCardPrevious);

  }

  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/game" exact>
        <GamePage deck={deck} onClick={onClick} onReset={onReset} counter={counter} />
      </Route>
      <Route path="/settings" exact component={SettingsPage} />
    </Switch>
  );
}

export default App;
