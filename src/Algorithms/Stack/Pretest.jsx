import React, { useState, useEffect, useCallback } from 'react';
import '../Quiz.css';

const questions = [
  {
    id: 1,
    question: "What is a stack data structure?",
    options: [
      { id: 'a', text: "A linear structure that follows LIFO", isCorrect: true },
      { id: 'b', text: "A linear structure that follows FIFO", isCorrect: false },
      { id: 'c', text: "A structure that allows random access", isCorrect: false },
      { id: 'd', text: "A structure that stores key-value pairs", isCorrect: false }
    ]
  },
  {
    id: 2,
    question: "Which operation adds an item to the stack?",
    options: [
      { id: 'a', text: "Pop", isCorrect: false },
      { id: 'b', text: "Push", isCorrect: true },
      { id: 'c', text: "Peek", isCorrect: false },
      { id: 'd', text: "Shift", isCorrect: false }
    ]
  },
  {
    id: 3,
    question: "Which operation removes the top item from the stack?",
    options: [
      { id: 'a', text: "Push", isCorrect: false },
      { id: 'b', text: "Pop", isCorrect: true },
      { id: 'c', text: "Peek", isCorrect: false },
      { id: 'd', text: "Add", isCorrect: false }
    ]
  },
  {
    id: 4,
    question: "What do you call the item at the top of a stack?",
    options: [
      { id: 'a', text: "Bottom", isCorrect: false },
      { id: 'b', text: "Top", isCorrect: true },
      { id: 'c', text: "Middle", isCorrect: false },
      { id: 'd', text: "End", isCorrect: false }
    ]
  },
  {
    id: 5,
    question: "Which of the following is a common use of stacks?",
    options: [
      { id: 'a', text: "Undo actions in applications", isCorrect: true },
      { id: 'b', text: "Sorting numbers", isCorrect: false },
      { id: 'c', text: "Searching data", isCorrect: false },
      { id: 'd', text: "Managing network connections", isCorrect: false }
    ]
  },
  {
    id: 6,
    question: "What happens if you try to pop from an empty stack?",
    options: [
      { id: 'a', text: "Returns null", isCorrect: false },
      { id: 'b', text: "Throws an error", isCorrect: true },
      { id: 'c', text: "Returns the last item", isCorrect: false },
      { id: 'd', text: "Does nothing", isCorrect: false }
    ]
  },
  {
    id: 7,
    question: "How do you check if a stack is empty?",
    options: [
      { id: 'a', text: "Check the top element", isCorrect: true },
      { id: 'b', text: "Count the items", isCorrect: false },
      { id: 'c', text: "Use a pop operation", isCorrect: false },
      { id: 'd', text: "Check for overflow", isCorrect: false }
    ]
  },
  {
    id: 8,
    question: "What data structure is commonly used to implement a stack?",
    options: [
      { id: 'a', text: "Array", isCorrect: true },
      { id: 'b', text: "Queue", isCorrect: false },
      { id: 'c', text: "Tree", isCorrect: false },
      { id: 'd', text: "Graph", isCorrect: false }
    ]
  },
  {
    id: 9,
    question: "Which of the following describes a stack’s order of operations?",
    options: [
      { id: 'a', text: "First In Last Out (FILO)", isCorrect: false },
      { id: 'b', text: "Last In First Out (LIFO)", isCorrect: true },
      { id: 'c', text: "First In First Out (FIFO)", isCorrect: false },
      { id: 'd', text: "Last In Last Out (LILO)", isCorrect: false }
    ]
  },
  {
    id: 10,
    question: "What is the primary purpose of the 'peek' operation?",
    options: [
      { id: 'a', text: "To view the top item without removing it", isCorrect: true },
      { id: 'b', text: "To remove the top item", isCorrect: false },
      { id: 'c', text: "To add a new item", isCorrect: false },
      { id: 'd', text: "To clear the stack", isCorrect: false }
    ]
  }
];

const shuffleArray = (array) => {
  let shuffled = array.slice(); 
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const Quiz = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  const selectRandomQuestions = useCallback(() => {
    const shuffled = shuffleArray(questions);
    return shuffled.slice(0, 5); // Adjust number of questions as needed
  }, []);

  useEffect(() => {
    setShuffledQuestions(selectRandomQuestions());
  }, [selectRandomQuestions]);

  const handleAnswerChange = (questionId, optionId) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: optionId,
    });
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setSubmitted(false);
    const inputs = document.querySelectorAll('input[type="radio"]');
    inputs.forEach(input => (input.checked = false));
    setShuffledQuestions(selectRandomQuestions()); 
  };

  return (
    <div className="quiz-container">
      {shuffledQuestions.map((question) => (
        <div key={question.id} className="question-block">
          <h3>{question.question}</h3>
          {question.options.map((option) => (
            <div key={option.id} className="option-block">
              <label className={`option-label ${submitted && (selectedAnswers[question.id] === option.id ? (option.isCorrect ? 'correct' : 'incorrect') : '')}`}>
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={option.id}
                  onChange={() => handleAnswerChange(question.id, option.id)}
                  disabled={submitted}
                />
                {option.text}
              </label>
            </div>
          ))}
          {submitted && (
            <div className={`result ${selectedAnswers[question.id] === question.options.find(o => o.isCorrect).id ? 'correct' : 'incorrect'}`}>
              {selectedAnswers[question.id] === question.options.find(o => o.isCorrect).id
                ? 'Correct'
                : 'Incorrect'}
            </div>
          )}
        </div>
      ))}
      <div className="button-container">
        {!submitted ? (
          <button className="submit-btn" onClick={handleSubmit}>
            Submit
          </button>
        ) : (
          <button className="reset-btn" onClick={handleReset}>
            Reset Quiz
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
