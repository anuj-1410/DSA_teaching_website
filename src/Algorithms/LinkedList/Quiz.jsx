import React, { useState, useEffect, useCallback } from 'react';
import '../Quiz.css';

const questions = [
  {
    id: 1,
    question: "What is the primary advantage of using a linked list over an array?",
    options: [
      { id: 'a', text: "Faster access time", isCorrect: false },
      { id: 'b', text: "Dynamic size", isCorrect: true },
      { id: 'c', text: "Easier sorting", isCorrect: false },
      { id: 'd', text: "Simpler implementation", isCorrect: false }
    ]
  },
  {
    id: 2,
    question: "In a singly linked list, each node contains:",
    options: [
      { id: 'a', text: "Data and a pointer to the next node", isCorrect: true },
      { id: 'b', text: "Data and pointers to both the next and previous nodes", isCorrect: false },
      { id: 'c', text: "Only data", isCorrect: false },
      { id: 'd', text: "A pointer to the head node", isCorrect: false }
    ]
  },
  {
    id: 3,
    question: "What is the time complexity for inserting a node at the beginning of a linked list?",
    options: [
      { id: 'a', text: "O(1)", isCorrect: true },
      { id: 'b', text: "O(n)", isCorrect: false },
      { id: 'c', text: "O(log n)", isCorrect: false },
      { id: 'd', text: "O(n^2)", isCorrect: false }
    ]
  },
  {
    id: 4,
    question: "Which of the following operations can be performed in O(1) time on a linked list?",
    options: [
      { id: 'a', text: "Searching for an element", isCorrect: false },
      { id: 'b', text: "Inserting at the head", isCorrect: true },
      { id: 'c', text: "Deleting a specific node", isCorrect: false },
      { id: 'd', text: "Accessing the middle element", isCorrect: false }
    ]
  },
  {
    id: 5,
    question: "In a doubly linked list, each node has:",
    options: [
      { id: 'a', text: "One pointer", isCorrect: false },
      { id: 'b', text: "Three pointers", isCorrect: false },
      { id: 'c', text: "Two pointers", isCorrect: true },
      { id: 'd', text: "No pointers", isCorrect: false }
    ]
  },
  {
    id: 6,
    question: "How can you determine the length of a linked list?",
    options: [
      { id: 'a', text: "Direct access", isCorrect: false },
      { id: 'b', text: "Using a built-in function", isCorrect: false },
      { id: 'c', text: "By counting the pointers", isCorrect: false },
      { id: 'd', text: "Iterating through the list", isCorrect: true }
    ]
  },
  {
    id: 7,
    question: "What is a circular linked list?",
    options: [
      { id: 'a', text: "A list where nodes are sorted in a circular order", isCorrect: false },
      { id: 'b', text: "A list that can change direction", isCorrect: false },
      { id: 'c', text: "A linked list with no nodes", isCorrect: false },
      { id: 'd', text: "A list where the last node points to the first node", isCorrect: true }
    ]
  },
  
  {
    id: 8,
    question: "When deleting a node from a linked list, what must you be careful to update?",
    options: [
      { id: 'a', text: "Only the node's data", isCorrect: false },
      { id: 'b', text: "The size of the list", isCorrect: false },
      { id: 'c', text: "The pointers of the previous and next nodes", isCorrect: true },
      { id: 'd', text: "The head of the list only", isCorrect: false }
    ]
  },
  
  {
    id: 9,
    question: "Which of the following is NOT a type of linked list?",
    options: [
      { id: 'a', text: "Singly linked list", isCorrect: false },
      { id: 'b', text: "Doubly linked list", isCorrect: false },
      { id: 'c', text: "Circular linked list", isCorrect: false },
      { id: 'd', text: "Indexed linked list", isCorrect: true }
    ]
  },
  
  {
    id: 10,
    question: "In a linked list, if a node points to NULL, what does that indicate?",
    options: [
      { id: 'a', text: "It is the last node", isCorrect: true },
      { id: 'b', text: "It is an empty list", isCorrect: false },
      { id: 'c', text: "There is an error in the list", isCorrect: false },
      { id: 'd', text: "It is the head node", isCorrect: false }
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
    return shuffled.slice(0, 5);
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

