import React, { useState, useEffect} from 'react';
import './App.css';
import Board from './Components/Board'
import {shuffle} from './helpers.js'

import defaultCards from './initialData'

const ambience = new Audio("static/Sounds/Ambience.mp3")
const reward = new Audio("static/Sounds/Reward.mp3")

const generateStartingDeck = () => {
  //Todo generate random cards 
  return  shuffle(defaultCards)
}

function App() {
  const [ flippedCards, setFlippedCard ] = useState([])
  const [ matchedCards, setMatchedCards ] = useState([])
  const [ cards, setCards ] = useState([])
  const [ showGame, setShowGame] = useState(false)
  const [ timesWon, setTimesWon] = useState(0)

  const handleClickCard = (id) => {
    if (flippedCards.length < 2 ){
      setFlippedCard([...flippedCards, id])
    }
  }

  const checkCardMatch = (id1, id2, cards) => {
    const card1 = cards.find(card => card.id === id1);
    const card2 = cards.find(card => card.id === id2);
    console.log("matchingCards", card1, card2, card1.name === card2.name)
    return card1.name === card2.name;
  }

  // Main game loop
  useEffect(() => {
    console.log(cards)
    if(flippedCards.length === 2){
      const flippedCardsMatch = checkCardMatch(flippedCards[0], flippedCards[1], cards)
      if(flippedCardsMatch){
        reward.play()
        setTimeout(() => {
          setFlippedCard([])
          setMatchedCards([...matchedCards , ...flippedCards])
        }, 1000)
      }else{
        setTimeout(() => {
          setFlippedCard([])
        }, 1000)
      }
    }
    if( cards.length > 0 && matchedCards.length === cards.length){
      setTimeout(() => {
        setMatchedCards([]);
        setTimesWon(timesWon + 1)
        setShowGame(false);
      }, 1000)
    }

  }, [matchedCards, flippedCards, cards, timesWon, setCards]);

  const startGame = () =>{
    setCards(generateStartingDeck)
    setShowGame(true)
    ambience.play()
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>MeMOOry</h1>
      </header>
      <div>
        {showGame?
          <Board 
            cards={cards}
            flippedCards={flippedCards}
            matchedCards={matchedCards}
            handleClickCard={handleClickCard}
          />
        :
          <div>
          {timesWon !== 0 && <h2> {`You have now matched all the Moos ${timesWon} time${timesWon > 1 ?'s':''}!`}</h2> }
          <button onClick={startGame}>Start matching Moos</button>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
