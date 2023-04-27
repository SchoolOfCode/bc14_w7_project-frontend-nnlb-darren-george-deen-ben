import React from 'react';

const AddCard = ({ question, answer, questionTextChange, answerTextChange, handleAddClick }) => {
  return (
    <div className="addCardContainer">
      <input className='questionText' type='text' placeholder='Enter question here' value={question} onChange={questionTextChange}></input>
      <input className='answerText' type='text' placeholder='Enter answer here' value={answer} onChange={answerTextChange}></input>
      <button className='addCard' onClick={handleAddClick}>Add to Deck</button>
    </div>
  )
}

export default AddCard;