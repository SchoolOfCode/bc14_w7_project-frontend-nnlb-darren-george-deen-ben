import React from 'react';

const AddCard = ({questionTextChange, answerTextChange, handleAddClick}) => {
  return (
    <div>
      <input className='questionText' type='text' placeholder='Enter question here' onChange={questionTextChange}></input>
      <input className='answerText' type='text' placeholder='Enter answer here' onChange={answerTextChange}></input>
      <button className='addCard' onClick={handleAddClick}>Add to Deck</button>
      <button>Start Revising</button>
    </div>
  )
}

export default AddCard;