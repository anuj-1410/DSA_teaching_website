import React, { useState, useEffect, useCallback } from 'react';
import '../Quiz.css';

const questions = [
  {
    id: 1,
    question: "What is a Linked List?",
    options: [
      { id: 'a', text: "A data structure where elements are stored sequentially in memory", isCorrect: false },
      { id: 'b', text: "A collection of elements, where each element points to the next", isCorrect: true },
      { id: 'c', text: "A tree-based data structure", isCorrect: false },
      { id: 'd', text: "None of the above", isCorrect: false }
    ]
  },
  {
    id: 2,
    question: "Which of the following is not a type of Linked List?",
    options: [
      { id: 'a', text: "Singly Linked List", isCorrect: false },
      { id: 'b', text: "Doubly Linked List", isCorrect: false },
      { id: 'c', text: "Circular Linked List", isCorrect: false },
      { id: 'd', text: "Binary Linked List", isCorrect: true }
    ]
  },
  {
    id: 3,
    question: "What is the time complexity of inserting a node at the beginning of a singly linked list?",
    options: [
      { id: 'a', text: "O(1)", isCorrect: true },
      { id: 'b', text: "O(n)", isCorrect: false },
      { id: 'c', text: "O(log n)", isCorrect: false },
      { id: 'd', text: "O(n²)", isCorrect: false }
    ]
  },
  {
    id: 4,
    question: "In a circular linked list, the last node points to which node?",
    options: [
      { id: 'a', text: "Null", isCorrect: false },
      { id: 'b', text: "Head node", isCorrect: true },
      { id: 'c', text: "Middle node", isCorrect: false },
      { id: 'd', text: "Last node itself", isCorrect: false }
    ]
  },
  {
    id: 5,
    question: "Which operation is faster in a linked list compared to an array?",
    options: [
      { id: 'a', text: "Accessing an element", isCorrect: false },
      { id: 'b', text: "Deleting an element", isCorrect: true },
      { id: 'c', text: "Both are equally fast", isCorrect: false },
      { id: 'd', text: "None of the above", isCorrect: false }
    ]
  },
  {
    id: 6,
    question: "What is the worst-case time complexity for searching an element in a singly linked list?",
    options: [
      { id: 'a', text: "O(n)", isCorrect: true },
      { id: 'b', text: "O(1)", isCorrect: false },
      { id: 'c', text: "O(log n)", isCorrect: false },
      { id: 'd', text: "O(n log n)", isCorrect: false }
    ]
  },
  {
    id: 7,
    question: "Which pointer is used to traverse a linked list?",
    options: [
      { id: 'a', text: "Front", isCorrect: false },
      { id: 'b', text: "Rear", isCorrect: false },
      { id: 'c', text: "Current", isCorrect: true },
      { id: 'd', text: "Temp", isCorrect: false }
    ]
  },
  {
    id: 8,
    question: "In a doubly linked list, each node contains how many pointers?",
    options: [
      { id: 'a', text: "1", isCorrect: false },
      { id: 'b', text: "2", isCorrect: true },
      { id: 'c', text: "3", isCorrect: false },
      { id: 'd', text: "4", isCorrect: false }
    ]
  },
  {
    id: 9,
    question: "What is the primary advantage of using a doubly linked list over a singly linked list?",
    options: [
      { id: 'a', text: "Faster search", isCorrect: false },
      { id: 'b', text: "Traversing in both directions", isCorrect: true },
      { id: 'c', text: "Easy insertion at the beginning", isCorrect: false },
      { id: 'd', text: "Less memory usage", isCorrect: false }
    ]
  },
  {
    id: 10,
    question: "What will be the output if you attempt to delete the head node of a circular linked list?",
    options: [
      { id: 'a', text: "The list will become empty", isCorrect: false },
      { id: 'b', text: "The next node will become the head", isCorrect: true },
      { id: 'c', text: "The last node will become the head", isCorrect: false },
      { id: 'd', text: "It will throw an error", isCorrect: false }
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

const Pretest = () => {
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






export default Pretest;