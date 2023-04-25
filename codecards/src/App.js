import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Revising from './components/Revising';
import AddCard from './components/AddCard';

function App() {

  const [deck, setDeck] = useState([]); //state of cards in the deck
  const [question, setQuestion] = useState(""); //text value of the question input
  const [answer, setAnswer] = useState(""); //text value of the answer input
  
  const questionTextChange = (e) => {
    setQuestion(e.target.value);
  } //sets the question state value to the question input value

  const answerTextChange = (e) => {
    setAnswer(e.target.value);
  } //sets the answer state value to the answer input value

  const handleAddClick = () => {
    setDeck([...deck, {question: `${question}`, answer: `${answer}`}]);
    console.log(deck)
    setAnswer("");
    setQuestion("");
  }// adds the card to the deck
  console.log(deck)







  return (
    <div className="App">
      <Header />
      <AddCard questionTextChange={questionTextChange} answerTextChange={answerTextChange} handleAddClick={handleAddClick}/>
      <Revising />
      <Footer />

    </div>
  );
}

export default App;
