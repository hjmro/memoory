import React, { useState } from 'react';
import './App.css';
import Card from './Components/Card'

import defaultCards from './initialData'

const ambience = new Audio("/Static/Sounds/ambience.mp3")
ambience.play()

function App() {
  const [ flippedCards, setFlippedCard ] = useState([])
  const [ cards, setCards ] = useState(defaultCards)
  const [ showGame, setShowGame] = useState(false)

  const handleClickCard = (id) => setFlippedCard([...flippedCards, id])

  const startGame = () =>{
    setShowGame(true)
    ambience.play()
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>MeMOOry</h1>
      </header>
      {showGame?
      cards.map(card => (
        <Card
          key={card.id}
          sound={card.call}
          id={card.id}
          name={card.name}
          isFlipped={flippedCards.includes(card.id)}
          flipCard={() => handleClickCard(card.id)}
          /> 
      ))
      :
      <button onClick={startGame}>Start matching Moos</button>
    }

     
    </div>
  );
}

export default App;
