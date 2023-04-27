import { render, screen, fireEvent } from "@testing-library/react";
import Revising from './components/Revising';
import App from "./App";
import FlashCard from './components/flashcard/FlashCard';

describe("App", () => {
  test('renders App without errors', () => {
    render(<App />);
  });

  test("renders the add card component", () => {
    render(<App />);
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });

  test('adding text to the input fields and clicking add button adds a new card to the deck', () => {
    const { getByLabelText, getByText } = render(<App />);
    const questionInput = getByLabelText('Question:');
    const answerInput = getByLabelText('Answer:');
    const addButton = getByText('Add Card');
  
    // simulate user input
    fireEvent.change(questionInput, { target: { value: 'What is the capital of France?' } });
    fireEvent.change(answerInput, { target: { value: 'Paris' } });
  
    // click add button
    fireEvent.click(addButton);
  
    // check if new card has been added to the deck
    const card = getByText('What is the capital of France?');
    expect(card).toBeInTheDocument();
  });

  // it("flips the card when clicked", () => {
  //   render(<App />);
  //   const card = screen.getByTestId("card");
  //   expect(card).toHaveClass("front");

  //   fireEvent.click(card);

  //   expect(card).toHaveClass("back");
  // });
});