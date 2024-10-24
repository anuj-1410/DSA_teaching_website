import React, { useState, useEffect, useCallback } from 'react';
import '../Quiz.css';
const questions = [
        {
          id: 1,
          question: "What is hashing used for in data structures?",
          options: [
            { id: 'a', text: "To sort data", isCorrect: false },
            { id: 'b', text: "To search for data quickly", isCorrect: true },
            { id: 'c', text: "To compress data", isCorrect: false },
            { id: 'd', text: "To store data in order", isCorrect: false }
          ]
        },
        {
          id: 2,
          question: "What is the main problem that double hashing solves?",
          options: [
            { id: 'a', text: "Hash table overflow", isCorrect: false },
            { id: 'b', text: "Duplicate key insertion", isCorrect: false },
            { id: 'c', text: "Collisions between keys", isCorrect: true },
            { id: 'd', text: "Slow memory access", isCorrect: false }
          ]
        },
        {
          id: 3,
          question: "In double hashing, what happens when two keys map to the same index?",
          options: [
            { id: 'a', text: "The second hash function is used to find a new index", isCorrect: true },
            { id: 'b', text: "The key is discarded", isCorrect: false },
            { id: 'c', text: "The hash table is resized", isCorrect: false },
            { id: 'd', text: "Both keys are stored at the same index", isCorrect: false }
          ]
        },
        {
          id: 4,
          question: "Which of the following is true about the second hash function in double hashing?",
          options: [
            { id: 'a', text: "It must always return a negative number", isCorrect: false },
            { id: 'b', text: "It should be relatively prime to the table size", isCorrect: true },
            { id: 'c', text: "It must always return a large number", isCorrect: false },
            { id: 'd', text: "It should be the same as the first hash function", isCorrect: false }
          ]
        },
        {
          id: 5,
          question: "What is the role of the first hash function in double hashing?",
          options: [
            { id: 'a', text: "It determines where to insert a key in the hash table", isCorrect: true },
            { id: 'b', text: "It is used for resizing the table", isCorrect: false },
            { id: 'c', text: "It ensures that keys are sorted", isCorrect: false },
            { id: 'd', text: "It is used to create a backup hash table", isCorrect: false }
          ]
        },
        {
          id: 6,
          question: "What happens when there is no space left in the table for a new key?",
          options: [
            { id: 'a', text: "The key is ignored", isCorrect: false },
            { id: 'b', text: "The hash table is rehashed", isCorrect: true },
            { id: 'c', text: "The key is placed at the last index", isCorrect: false },
            { id: 'd', text: "The key is stored outside the table", isCorrect: false }
          ]
        },
        {
          id: 7,
          question: "Why is double hashing preferred over simple linear probing?",
          options: [
            { id: 'a', text: "It reduces clustering", isCorrect: true },
            { id: 'b', text: "It increases memory usage", isCorrect: false },
            { id: 'c', text: "It simplifies the hash function", isCorrect: false },
            { id: 'd', text: "It allows for fewer hash functions", isCorrect: false }
          ]
        },
        {
          id: 8,
          question: "How does the second hash function in double hashing differ from the first?",
          options: [
            { id: 'a', text: "It is used to find new slots when a collision happens", isCorrect: true },
            { id: 'b', text: "It runs faster than the first hash function", isCorrect: false },
            { id: 'c', text: "It uses a different table size", isCorrect: false },
            { id: 'd', text: "It is applied only when the table is full", isCorrect: false }
          ]
        },
        {
          id: 9,
          question: "What ensures that double hashing doesn't fall into an infinite loop?",
          options: [
            { id: 'a', text: "The use of two different hash functions", isCorrect: true },
            { id: 'b', text: "The size of the hash table", isCorrect: false },
            { id: 'c', text: "The speed of the hashing algorithm", isCorrect: false },
            { id: 'd', text: "The use of only prime numbers as keys", isCorrect: false }
          ]
        },
        {
          id: 10,
          question: "Double hashing is a good choice when:",
          options: [
            { id: 'a', text: "We want to minimize collisions", isCorrect: true },
            { id: 'b', text: "We want to use a single hash function", isCorrect: false },
            { id: 'c', text: "We want to delete keys frequently", isCorrect: false },
            { id: 'd', text: "We need to use very small table sizes", isCorrect: false }
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
