import React from 'react';
import PropTypes from 'prop-types'
import './styles.css'


export default function Card({id, sound, isFlipped, isMatched, name, flipCard, image, type}){
    const faceSideUp = isFlipped || isMatched;
    return(
        <div 
            className={`flip-card ${faceSideUp ? "faceUp" :""}`}
            onClick={
                () => {
                    sound.play()
                    if(!isFlipped){
                        flipCard()
                    }
                }}
        >
            <div 
                className={`flip-card-inner ${faceSideUp ? "faceUp" :""}`} >
                {faceSideUp? 
                    <div className="flip-card-front">
                        <img 
                            className={"cardImageFront"} 
                            alt={"Card faced up"} 
                            src={
                                type==="image" || isMatched ?
                                    image:
                                    "static/Images/unknown.png"
                                }/>
                        <div className={"nametag"}><span>{ type=== "name" || isMatched ? name: "???"}</span></div>
                    </div>
                    : 
                    <div className="flip-card-back">
                        <img className={"cardImage"} alt={"Card faced down"} src={"static/Images/Behind.jpg"}/>
                    </div>
                 }
            </div>
        </div>
    ) 
}



Card.propTypes = {
    id : PropTypes.number.isRequired,
    isFlipped: PropTypes.bool.isRequired,
    isMatched: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    flipCard: PropTypes.func.isRequired,
    sound: PropTypes.any,
    type: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}