import React from 'react';
import FlashCard from './flashcard/FlashCard';

const Revising = ({randomCard, flipToFront, setFlipToFront, randomCardClick }) => {
  return (
    <section>
      <div className="flashcard-container">
      <FlashCard 
        randomCard={randomCard} 
        flipToFront={flipToFront} 
        setFlipToFront={setFlipToFront}
        randomCardClick={randomCardClick}
      />
    </div>
    </section>
  )
}

export default Revising;