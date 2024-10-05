import React, { useState, useEffect, useCallback } from 'react';
import '../Quiz.css';

const questions = [
  {
    id: 1,
    question: "What is the main goal of double hashing in DSA?",
    options: [
      { id: 'a', text: "To reduce time complexity", isCorrect: false },
      { id: 'b', text: "To avoid collisions", isCorrect: true },
      { id: 'c', text: "To optimize space usage", isCorrect: false },
      { id: 'd', text: "To increase memory usage", isCorrect: false }
    ]
  },
  {
    id: 2,
    question: "Double hashing uses how many hash functions?",
    options: [
      { id: 'a', text: "1", isCorrect: false },
      { id: 'b', text: "2", isCorrect: true },
      { id: 'c', text: "3", isCorrect: false },
      { id: 'd', text: "4", isCorrect: false }
    ]
  },
  {
    id: 3,
    question: "What is the formula for double hashing?",
    options: [
      { id: 'a', text: "h(key) = (h1(key) + h2(key)) % table_size", isCorrect: false },
      { id: 'b', text: "h(key) = (h1(key) + i * h2(key)) % table_size", isCorrect: true },
      { id: 'c', text: "h(key) = (h1(key) * h2(key)) % table_size", isCorrect: false },
      { id: 'd', text: "h(key) = (h1(key) + i * h1(key)) % table_size", isCorrect: false }
    ]
  },
  {
    id: 4,
    question: "What is a key benefit of double hashing?",
    options: [
      { id: 'a', text: "It provides better clustering", isCorrect: false },
      { id: 'b', text: "It provides efficient memory allocation", isCorrect: false },
      { id: 'c', text: "It reduces clustering", isCorrect: true },
      { id: 'd', text: "It reduces the need for rehashing", isCorrect: false }
    ]
  },
  {
    id: 5,
    question: "In double hashing, the second hash function should be chosen such that it is:",
    options: [
      { id: 'a', text: "Divisible by the table size", isCorrect: false },
      { id: 'b', text: "A power of 2", isCorrect: false },
      { id: 'c', text: "Relatively prime to the table size", isCorrect: true },
      { id: 'd', text: "Smaller than the table size", isCorrect: false }
    ]
  },
  {
    id: 6,
    question: "What is the time complexity of double hashing?",
    options: [
      { id: 'a', text: "O(n)", isCorrect: false },
      { id: 'b', text: "O(1)", isCorrect: true },
      { id: 'c', text: "O(log n)", isCorrect: false },
      { id: 'd', text: "O(n^2)", isCorrect: false }
    ]
  },
  {
    id: 7,
    question: "What is the primary reason for using double hashing over linear probing?",
    options: [
      { id: 'a', text: "It speeds up insertion", isCorrect: false },
      { id: 'b', text: "It reduces clustering", isCorrect: true },
      { id: 'c', text: "It increases memory efficiency", isCorrect: false },
      { id: 'd', text: "It reduces time complexity", isCorrect: false }
    ]
  },
  
  {
    id: 8,
    question: "Which of the following is a requirement for the second hash function in double hashing?",
    options: [
      { id: 'a', text: "It must return a constant value", isCorrect: false },
      { id: 'b', text: "It must return an even number", isCorrect: false },
      { id: 'c', text: "It must be independent of the first hash function", isCorrect: true },
      { id: 'd', text: "It must be equal to the table size", isCorrect: false }
    ]
  },
  
  {
    id: 9,
    question: "What happens if the second hash function in double hashing is not relatively prime to the table size?",
    options: [
      { id: 'a', text: "It will result in fewer probes", isCorrect: false },
      { id: 'b', text: "It will result in the same performance as linear probing", isCorrect: true },
      { id: 'c', text: "It will optimize space usage", isCorrect: false },
      { id: 'd', text: "It will reduce time complexity", isCorrect: false }
    ]
  },
  
  {
    id: 10,
    question: "Double hashing helps minimize collisions by:",
    options: [
      { id: 'a', text: "Generating two random hash values", isCorrect: false },
      { id: 'b', text: "Using two different hash functions for probing", isCorrect: true },
      { id: 'c', text: "Avoiding rehashing", isCorrect: false },
      { id: 'd', text: "Utilizing fixed memory space", isCorrect: false }
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

