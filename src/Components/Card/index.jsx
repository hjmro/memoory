import React from 'react';
import PropTypes from 'prop-types'
import './styles.css'

export default function Card({id, sound, isFlipped, name, flipCard}){
    console.log("flipped", isFlipped)
    return(
        <div 
            className={`card ${isFlipped ? "flipped" :""}`}
            onClick={
                () => {
                    sound.play()
                    if(!isFlipped){
                        flipCard()
                    }
                }}
        >
            <div>
                {isFlipped? name : ( <img className={"cardImage"} alt="Card faced down" src={"/Static/Images/Behind.jpg"}/>)}
            </div>
        </div>
    ) 
}

Card.propTypes = {
    id : PropTypes.number.isRequired,
    isFlipped: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    flipCard: PropTypes.func.isRequired,
    sound: PropTypes.any
}