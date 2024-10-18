import React, { useState, useEffect, useCallback } from 'react';
import '../Quiz.css';

const questions = [
  {
    id: 1,
    question: "What does LIFO stand for in the context of stacks?",
    options: [
      { id: 'a', text: "Last In, First Out", isCorrect: true },
      { id: 'b', text: "Last In, First Ordered", isCorrect: false },
      { id: 'c', text: "Linear Input, First Output", isCorrect: false },
      { id: 'd', text: "Least In, First Out", isCorrect: false }
    ]
  },
  {
    id: 2,
    question: "Which operation removes the top element from a stack?",
    options: [
      { id: 'a', text: "Add", isCorrect: false },
      { id: 'b', text: "Pop", isCorrect: true },
      { id: 'c', text: "Peek", isCorrect: false },
      { id: 'd', text: "Push", isCorrect: false }
    ]
  },
  {
    id: 3,
    question: "In stack terminology, what is the 'top'?",
    options: [
      { id: 'a', text: "The first element", isCorrect: false },
      { id: 'b', text: "The last element added", isCorrect: true },
      { id: 'c', text: "The smallest element", isCorrect: false },
      { id: 'd', text: "The largest element", isCorrect: false }
    ]
  },
  {
    id: 4,
    question: "Which of the following is a common application of stacks?",
    options: [
      { id: 'a', text: "Undo mechanisms in software", isCorrect: true },
      { id: 'b', text: "Managing server requests", isCorrect: false },
      { id: 'c', text: "Storing user sessions", isCorrect: false },
      { id: 'd', text: "Maintaining a sorted list", isCorrect: false }
    ]
  },
  {
    id: 5,
    question: "How can you check if a stack is empty?",
    options: [
      { id: 'a', text: "Check if the top element is null", isCorrect: true },
      { id: 'b', text: "Count the number of elements", isCorrect: false },
      { id: 'c', text: "Try to pop an element", isCorrect: false },
      { id: 'd', text: "Check if the size is greater than 1", isCorrect: false }
    ]
  },
  {
    id: 6,
    question: "What is the time complexity of pushing an element onto a stack?",
    options: [
      { id: 'a', text: "O(1)", isCorrect: true },
      { id: 'b', text: "O(n)", isCorrect: false },
      { id: 'c', text: "O(log n)", isCorrect: false },
      { id: 'd', text: "O(n^2)", isCorrect: false }
    ]
  },
  {
    id: 7,
    question: "Which data structure can be used to implement a stack?",
    options: [
      { id: 'a', text: "Array", isCorrect: true },
      { id: 'b', text: "Graph", isCorrect: false },
      { id: 'c', text: "Tree", isCorrect: false },
      { id: 'd', text: "Set", isCorrect: false }
    ]
  },
  {
    id: 8,
    question: "What does the 'peek' operation do?",
    options: [
      { id: 'a', text: "Returns the top element without removing it", isCorrect: true },
      { id: 'b', text: "Removes the top element", isCorrect: false },
      { id: 'c', text: "Adds a new element", isCorrect: false },
      { id: 'd', text: "Checks if the stack is empty", isCorrect: false }
    ]
  },
  {
    id: 9,
    question: "What could happen if you try to pop an element from an empty stack?",
    options: [
      { id: 'a', text: "The program crashes", isCorrect: false },
      { id: 'b', text: "Returns null or throws an error", isCorrect: true },
      { id: 'c', text: "Returns the last element", isCorrect: false },
      { id: 'd', text: "Does nothing", isCorrect: false }
    ]
  },
  {
    id: 10,
    question: "Which algorithm commonly uses a stack for backtracking?",
    options: [
      { id: 'a', text: "Binary Search", isCorrect: false },
      { id: 'b', text: "Depth-First Search", isCorrect: true },
      { id: 'c', text: "Merge Sort", isCorrect: false },
      { id: 'd', text: "Breadth-First Search", isCorrect: false }
    ]
  },
  {
    id: 11,
    question: "In which scenario would you prefer a stack over a queue?",
    options: [
      { id: 'a', text: "When order of processing is important", isCorrect: false },
      { id: 'b', text: "When you need to reverse data", isCorrect: true },
      { id: 'c', text: "When you need random access", isCorrect: false },
      { id: 'd', text: "When items are processed in a First In, First Out manner", isCorrect: false }
    ]
  },
  {
    id: 12,
    question: "What is a common way to implement a stack in languages that support dynamic memory allocation?",
    options: [
      { id: 'a', text: "Using a linked list", isCorrect: true },
      { id: 'b', text: "Using a static array", isCorrect: false },
      { id: 'c', text: "Using a hash table", isCorrect: false },
      { id: 'd', text: "Using a tree structure", isCorrect: false }
    ]
  },
  {
    id: 13,
    question: "What happens during a stack overflow?",
    options: [
      { id: 'a', text: "The stack grows beyond its maximum size", isCorrect: true },
      { id: 'b', text: "The stack is empty", isCorrect: false },
      { id: 'c', text: "The stack is full", isCorrect: false },
      { id: 'd', text: "The last element is removed", isCorrect: false }
    ]
  },
  {
    id: 14,
    question: "When would you typically use a stack in programming?",
    options: [
      { id: 'a', text: "For sorting elements", isCorrect: false },
      { id: 'b', text: "For parsing expressions", isCorrect: true },
      { id: 'c', text: "For finding minimum values", isCorrect: false },
      { id: 'd', text: "For storing records", isCorrect: false }
    ]
  },
  {
    id: 15,
    question: "Which operation is not typically associated with stacks?",
    options: [
      { id: 'a', text: "Push", isCorrect: false },
      { id: 'b', text: "Pop", isCorrect: false },
      { id: 'c', text: "Enqueue", isCorrect: true },
      { id: 'd', text: "Peek", isCorrect: false }
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
