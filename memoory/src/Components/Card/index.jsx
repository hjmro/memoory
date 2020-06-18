import React from 'react';
import PropTypes from 'prop-types'
import './styles.css'

export default function Card({id, isFlipped, name, handleClickCard}){
    console.log("flipped", isFlipped)
    return(
        <div 
            className={`card ${isFlipped ? "flipped" :""}`}
            onClick={isFlipped?()=>{}:handleClickCard}
        >
            <div>
                {isFlipped? name : "ThisIsTheBack"}
            </div>
        </div>
    ) 
}

Card.propTypes = {
    id : PropTypes.number.isRequired,
    isFlipped: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    handleClickCard: PropTypes.func.isRequired
}