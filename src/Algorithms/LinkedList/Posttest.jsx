import React, { useState, useEffect, useCallback } from 'react';
import '../Quiz.css';

const questions = [
  {
    id: 1,
    question: "In which case is a Linked List preferred over arrays?",
    options: [
      { id: 'a', text: "Random access is needed", isCorrect: false },
      { id: 'b', text: "Frequent insertions and deletions are required", isCorrect: true },
      { id: 'c', text: "Fixed size data structure is needed", isCorrect: false },
      { id: 'd', text: "Access time is critical", isCorrect: false }
    ]
  },
  {
    id: 2,
    question: "Which of the following statements about Circular Linked Lists is true?",
    options: [
      { id: 'a', text: "The list is linear", isCorrect: false },
      { id: 'b', text: "It does not have a null pointer in any of its nodes", isCorrect: true },
      { id: 'c', text: "It must always have an even number of nodes", isCorrect: false },
      { id: 'd', text: "The last node points to null", isCorrect: false }
    ]
  },
  {
    id: 3,
    question: "Which of the following operations is not a typical operation on Linked Lists?",
    options: [
      { id: 'a', text: "Insertion", isCorrect: false },
      { id: 'b', text: "Deletion", isCorrect: false },
      { id: 'c', text: "Random access", isCorrect: true },
      { id: 'd', text: "Traversing", isCorrect: false }
    ]
  },
  {
    id: 4,
    question: "What is the time complexity to delete a middle node in a doubly linked list?",
    options: [
      { id: 'a', text: "O(n)", isCorrect: false },
      { id: 'b', text: "O(log n)", isCorrect: false },
      { id: 'c', text: "O(1)", isCorrect: true },
      { id: 'd', text: "O(n log n)", isCorrect: false }
    ]
  },
  {
    id: 5,
    question: "Which data structure can be used to implement a Linked List?",
    options: [
      { id: 'a', text: "Stack", isCorrect: false },
      { id: 'b', text: "Array", isCorrect: true },
      { id: 'c', text: "Queue", isCorrect: false },
      { id: 'd', text: "All of the above", isCorrect: false }
    ]
  },
  {
    id: 6,
    question: "In a singly linked list, how can we identify the last node?",
    options: [
      { id: 'a', text: "It points to null", isCorrect: true },
      { id: 'b', text: "It points to the head node", isCorrect: false },
      { id: 'c', text: "It has no value", isCorrect: false },
      { id: 'd', text: "It is not identifiable", isCorrect: false }
    ]
  },
  {
    id: 7,
    question: "Which operation is not efficient in a singly linked list?",
    options: [
      { id: 'a', text: "Insertion at the beginning", isCorrect: false },
      { id: 'b', text: "Deletion from the end", isCorrect: true },
      { id: 'c', text: "Traversal", isCorrect: false },
      { id: 'd', text: "Insertion at the end", isCorrect: false }
    ]
  },
  {
    id: 8,
    question: "In a Circular Linked List, how many pointers are used to maintain the structure?",
    options: [
      { id: 'a', text: "One pointer", isCorrect: true },
      { id: 'b', text: "Two pointers", isCorrect: false },
      { id: 'c', text: "Three pointers", isCorrect: false },
      { id: 'd', text: "No pointer", isCorrect: false }
    ]
  },
  {
    id: 9,
    question: "If a linked list has n nodes, what is the time complexity to find the nth node from the start?",
    options: [
      { id: 'a', text: "O(1)", isCorrect: false },
      { id: 'b', text: "O(n)", isCorrect: true },
      { id: 'c', text: "O(log n)", isCorrect: false },
      { id: 'd', text: "O(n²)", isCorrect: false }
    ]
  },
  {
    id: 10,
    question: "What is the major disadvantage of using linked lists?",
    options: [
      { id: 'a', text: "Memory usage is inefficient", isCorrect: false },
      { id: 'b', text: "Difficult insertion and deletion", isCorrect: false },
      { id: 'c', text: "Random access of elements", isCorrect: true },
      { id: 'd', text: "High time complexity for traversal", isCorrect: false }
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

const Posttest = () => {
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

export default Posttest;
