import React from 'react';
import PropTypes from 'prop-types'
import './styles.css'
import Card from '../Card'

export default function Board({cards, flippedCards, matchedCards, handleClickCard}){
    return(
        <div className="gameBoard" >
            {cards.map(card => (
                <div className="cardSpot">
                    <Card
                        key={card.id}
                        sound={card.call}
                        id={card.id}
                        name={card.name}
                        image={card.imageRef}
                        type={card.type}
                        isFlipped={flippedCards.includes(card.id)}
                        isMatched={matchedCards.includes(card.id)}
                        flipCard={() => handleClickCard(card.id)}
                        /> 
                </div>
                ))
            }
        </div>
    )
}

Board.propTypes = {
    cards : PropTypes.array.isRequired,
    flippedCards: PropTypes.arrayOf(PropTypes.number).isRequired,
    matchedCards: PropTypes.arrayOf(PropTypes.number).isRequired,
    handleClickCard: PropTypes.func.isRequired,
}