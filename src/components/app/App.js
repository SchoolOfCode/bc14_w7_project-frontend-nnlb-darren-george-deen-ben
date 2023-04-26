import React, { useState } from 'react'
import FlashCard from "../flashcard/FlashCard";
import deck from '../Deck'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'


export default function App() {

  const [randomCard, setRandomCard] = useState(deck[0])
  const [flipToFront, setFlipToFront] = useState(true)

  const randomCardClick = () => {
    const randomIndex = Math.floor(Math.random() * deck.length);
    setTimeout(() => {
      setRandomCard(deck[randomIndex])
    }, 300)
    setFlipToFront(true)
  };


  return (
    <div className="App">
      <div className="flashcard-container">
      <FlashCard 
        randomCard={randomCard} 
        flipToFront={flipToFront} 
        setFlipToFront={setFlipToFront}
        randomCardClick={randomCardClick}
      />
    </div>
    </div>
    
  );
}