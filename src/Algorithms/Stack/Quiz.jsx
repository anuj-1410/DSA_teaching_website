import React, { useState, useEffect, useCallback } from 'react';
import '../Quiz.css';

const questions = [
  {
    id: 1,
    question: "What is the primary function of a stack data structure?",
    options: [
      { id: 'a', text: "FIFO (First In First Out)", isCorrect: false },
      { id: 'b', text: "LIFO (Last In First Out)", isCorrect: true },
      { id: 'c', text: "Random access", isCorrect: false },
      { id: 'd', text: "Priority based", isCorrect: false }
    ]
  },
  {
    id: 2,
    question: "Which of the following operations is NOT performed on a stack?",
    options: [
      { id: 'a', text: "Push", isCorrect: false },
      { id: 'b', text: "Pop", isCorrect: false },
      { id: 'c', text: "Peek", isCorrect: false },
      { id: 'd', text: "Shift", isCorrect: true }
    ]
  },
  {
    id: 3,
    question: "What does the 'peek' operation do in a stack?",
    options: [
      { id: 'a', text: "Removes the top element", isCorrect: false },
      { id: 'b', text: "Returns the top element without removing it", isCorrect: true },
      { id: 'c', text: "Adds an element to the top", isCorrect: false },
      { id: 'd', text: "Checks if the stack is empty", isCorrect: false }
    ]
  },
  {
    id: 4,
    question: "What is a common use case for a stack?",
    options: [
      { id: 'a', text: "Managing function calls in recursion", isCorrect: true },
      { id: 'b', text: "Storing items in a queue", isCorrect: false },
      { id: 'c', text: "Sorting data", isCorrect: false },
      { id: 'd', text: "Searching elements", isCorrect: false }
    ]
  },
  {
    id: 5,
    question: "What happens when you pop an element from an empty stack?",
    options: [
      { id: 'a', text: "Returns null", isCorrect: false },
      { id: 'b', text: "Throws an error", isCorrect: true },
      { id: 'c', text: "Returns the last element", isCorrect: false },
      { id: 'd', text: "Remains unchanged", isCorrect: false }
    ]
  },
  {
    id: 6,
    question: "How can you implement a stack using an array?",
    options: [
      { id: 'a', text: "Using a fixed size array", isCorrect: true },
      { id: 'b', text: "Using a linked list only", isCorrect: false },
      { id: 'c', text: "Using a queue", isCorrect: false },
      { id: 'd', text: "Using a hash table", isCorrect: false }
    ]
  },
  {
    id: 7,
    question: "In what time complexity does the push operation run in a stack?",
    options: [
      { id: 'a', text: "O(1)", isCorrect: true },
      { id: 'b', text: "O(n)", isCorrect: false },
      { id: 'c', text: "O(log n)", isCorrect: false },
      { id: 'd', text: "O(n^2)", isCorrect: false }
    ]
  },
  {
    id: 8,
    question: "Which of the following describes a stack overflow?",
    options: [
      { id: 'a', text: "Adding elements until the stack is empty", isCorrect: false },
      { id: 'b', text: "Removing elements until the stack is empty", isCorrect: false },
      { id: 'c', text: "Attempting to push an element onto a full stack", isCorrect: true },
      { id: 'd', text: "Popping elements without adding any", isCorrect: false }
    ]
  },
  {
    id: 9,
    question: "Which of the following is an example of stack applications?",
    options: [
      { id: 'a', text: "Undo functionality in applications", isCorrect: true },
      { id: 'b', text: "Web page navigation", isCorrect: false },
      { id: 'c', text: "Database transactions", isCorrect: false },
      { id: 'd', text: "Event handling in GUI", isCorrect: false }
    ]
  },
  {
    id: 10,
    question: "How do you check if a stack is empty?",
    options: [
      { id: 'a', text: "Check if the top element is null", isCorrect: true },
      { id: 'b', text: "Count the elements", isCorrect: false },
      { id: 'c', text: "Use the pop operation", isCorrect: false },
      { id: 'd', text: "Use the peek operation", isCorrect: false }
    ]
  },
  {
    id: 11,
    question: "What is a stack's maximum size determined by?",
    options: [
      { id: 'a', text: "The number of elements pushed", isCorrect: false },
      { id: 'b', text: "The array size or linked list nodes", isCorrect: true },
      { id: 'c', text: "The pop operations performed", isCorrect: false },
      { id: 'd', text: "The programming language used", isCorrect: false }
    ]
  },
  {
    id: 12,
    question: "Which of the following is a property of stack data structure?",
    options: [
      { id: 'a', text: "Elements can be accessed randomly", isCorrect: false },
      { id: 'b', text: "Last element added is the first one to be removed", isCorrect: true },
      { id: 'c', text: "Elements can be added in the middle", isCorrect: false },
      { id: 'd', text: "All operations are O(n)", isCorrect: false }
    ]
  },
  {
    id: 13,
    question: "What does the term 'backtracking' in algorithms often involve?",
    options: [
      { id: 'a', text: "Using a stack to store state", isCorrect: true },
      { id: 'b', text: "Using a queue for search", isCorrect: false },
      { id: 'c', text: "Sorting elements", isCorrect: false },
      { id: 'd', text: "Direct access memory", isCorrect: false }
    ]
  },
  {
    id: 14,
    question: "Which algorithm uses a stack to solve the problem of balancing parentheses?",
    options: [
      { id: 'a', text: "Breadth-first search", isCorrect: false },
      { id: 'b', text: "Depth-first search", isCorrect: true },
      { id: 'c', text: "Dijkstra's algorithm", isCorrect: false },
      { id: 'd', text: "Binary search", isCorrect: false }
    ]
  },
  {
    id: 15,
    question: "What is the space complexity of using a stack implemented with an array?",
    options: [
      { id: 'a', text: "O(1)", isCorrect: false },
      { id: 'b', text: "O(n)", isCorrect: true },
      { id: 'c', text: "O(log n)", isCorrect: false },
      { id: 'd', text: "O(n^2)", isCorrect: false }
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
    return shuffled.slice(0, 5); // You can adjust this number if you want to display more or fewer questions
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
