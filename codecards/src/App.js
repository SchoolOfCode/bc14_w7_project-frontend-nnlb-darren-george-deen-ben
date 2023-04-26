import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Revising from './components/Revising';
import AddCard from './components/AddCard';
import deck from './Deck'; // hardcoded qs
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  
  // Card-flipping functionality, see Revising.js
  const [randomCard, setRandomCard] = useState(deck[0])
  const [flipToFront, setFlipToFront] = useState(true)
  
  //const [newCard, setNewCard] = useState({}); //state of cards in the deck
  const [question, setQuestion] = useState(""); //text value of the question input
  const [answer, setAnswer] = useState(""); //text value of the answer input

  const randomCardClick = () => {
    const randomIndex = Math.floor(Math.random() * deck.length);
    setTimeout(() => {
      setRandomCard(deck[randomIndex])
    }, 300)
    setFlipToFront(true)
  };
/////////////////////////////////

  const questionTextChange = (e) => {
    setQuestion(e.target.value);
  } //sets the question state value to the question input value

  const answerTextChange = (e) => {
    setAnswer(e.target.value);
  } //sets the answer state value to the answer input value

  const handleAddClick = () => {
    const newCard1 = { question, answer };
    deck.push(newCard1)
    //const newDeck = [...deck, newCard];
    
    
    setQuestion("");
    setAnswer("");
  }
  // adds the card to the deck
  // console.log(deck1)
  
  console.log(deck)






  return (
    <div className="App">
      <Header />
      <div className="landing-page-buttons">
        <button>Create Card</button>
        <button>Start Revising!</button>
      </div>
      <AddCard 
      questionTextChange={questionTextChange} 
      answerTextChange={answerTextChange} 
      handleAddClick={handleAddClick}/>
      
      <Revising 
        randomCard={randomCard} 
        flipToFront={flipToFront} 
        setFlipToFront={setFlipToFront}
        randomCardClick={randomCardClick}
      />
      <Footer />

    </div>
  );
}

export default App;

/* DAY 3 PLAN
- Create revising section
 */
