import { render, screen, fireEvent } from "@testing-library/react";
import AddCard from './components/AddCard';
import deck from '../Deck';

test('adds a new card to the deck', () => {
  render(<AddCard />);

  const questionInput = screen.getByPlaceholderText('Enter question here');
  const answerInput = screen.getByPlaceholderText('Enter answer here');
  const addButton = screen.getByText('Add to Deck');

  fireEvent.change(questionInput, { target: { value: 'What is JavaScript used for?' } });
  fireEvent.change(answerInput, { target: { value: 'Creating interactive web pages and applications.' } });
  fireEvent.click(addButton);
  console.log(deck);

  expect(deck[0]).toEqual({ question: 'What is JavaScript used for?', answer: 'Creating interactive web pages and applications.' });
  //expect(screen.getByText({ question: 'What is JavaScript used for?', answer: 'Creating interactive web pages and applications.' })).toBeInTheDocument();
  // expect(screen.getByText('Paris')).toBeInTheDocument();
});