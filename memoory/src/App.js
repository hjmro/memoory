import React, { useState } from 'react';
import './App.css';
import Card from './Components/Card'

import defaultCards from './initialData'

function App() {
  const [ flippedCards, setFlippedCard ] = useState([])
  const [ cards, setCards ] = useState(defaultCards)


  const handleClickCard = (id) => setFlippedCard([...flippedCards, id])
console.log(defaultCards.default)
  return (
    <div className="App">
      <header className="App-header">
        <h1>MeMOOry</h1>
      </header>
      {cards.map(card => (
        <Card
          id={card.id}
          name={card.name}
          isFlipped={flippedCards.includes(card.id)}
          handleClickCard={() => handleClickCard(card.id)}
          /> 
      ))}
        
    </div>
  );
}

export default App;
