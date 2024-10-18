import React, { useState, useEffect, useCallback } from 'react';
import '../Quiz.css';

const questions = [
  {
    id: 1,
    question: "What is the main principle behind Quick Sort?",
    options: [
      { id: 'a', text: "Divide and conquer", isCorrect: true },
      { id: 'b', text: "Greedy method", isCorrect: false },
      { id: 'c', text: "Dynamic programming", isCorrect: false },
      { id: 'd', text: "Brute force", isCorrect: false }
    ]
  },
  {
    id: 2,
    question: "What is a common way to select a pivot in Quick Sort?",
    options: [
      { id: 'a', text: "First element", isCorrect: false },
      { id: 'b', text: "Random element", isCorrect: true },
      { id: 'c', text: "Median element", isCorrect: true },
      { id: 'd', text: "Last element", isCorrect: false }
    ]
  },
  {
    id: 3,
    question: "What is the average time complexity of Quick Sort?",
    options: [
      { id: 'a', text: "O(n)", isCorrect: false },
      { id: 'b', text: "O(n log n)", isCorrect: true },
      { id: 'c', text: "O(n^2)", isCorrect: false },
      { id: 'd', text: "O(log n)", isCorrect: false }
    ]
  },
  {
    id: 4,
    question: "In which scenario does Quick Sort have its worst-case performance?",
    options: [
      { id: 'a', text: "When the array is nearly sorted", isCorrect: false },
      { id: 'b', text: "When the array is sorted in reverse order", isCorrect: true },
      { id: 'c', text: "When the pivot is the median", isCorrect: false },
      { id: 'd', text: "When all elements are the same", isCorrect: false }
    ]
  },
  {
    id: 5,
    question: "What is the worst-case time complexity of Quick Sort?",
    options: [
      { id: 'a', text: "O(n log n)", isCorrect: false },
      { id: 'b', text: "O(n^2)", isCorrect: true },
      { id: 'c', text: "O(n)", isCorrect: false },
      { id: 'd', text: "O(log n)", isCorrect: false }
    ]
  },
  {
    id: 6,
    question: "Which of the following is a characteristic of Quick Sort?",
    options: [
      { id: 'a', text: "It is a stable sort", isCorrect: false },
      { id: 'b', text: "It is an in-place sort", isCorrect: true },
      { id: 'c', text: "It requires O(n) additional space", isCorrect: false },
      { id: 'd', text: "It sorts linked lists efficiently", isCorrect: false }
    ]
  },
  {
    id: 7,
    question: "What happens during the partitioning step in Quick Sort?",
    options: [
      { id: 'a', text: "The array is divided into two equal halves", isCorrect: false },
      { id: 'b', text: "Elements are rearranged around the pivot", isCorrect: true },
      { id: 'c', text: "All elements are sorted", isCorrect: false },
      { id: 'd', text: "Elements are merged together", isCorrect: false }
    ]
  },
  {
    id: 8,
    question: "Which of the following is a common optimization for Quick Sort?",
    options: [
      { id: 'a', text: "Switching to insertion sort for small arrays", isCorrect: true },
      { id: 'b', text: "Always choosing the last element as pivot", isCorrect: false },
      { id: 'c', text: "Using a linked list instead of an array", isCorrect: false },
      { id: 'd', text: "Sorting in reverse order", isCorrect: false }
    ]
  },
  {
    id: 9,
    question: "What does it mean for Quick Sort to be 'in-place'?",
    options: [
      { id: 'a', text: "It does not require extra memory for sorting", isCorrect: true },
      { id: 'b', text: "It uses multiple arrays", isCorrect: false },
      { id: 'c', text: "It is not efficient", isCorrect: false },
      { id: 'd', text: "It only sorts small datasets", isCorrect: false }
    ]
  },
  {
    id: 10,
    question: "In Quick Sort, when is the base case of recursion reached?",
    options: [
      { id: 'a', text: "When the array has one element", isCorrect: true },
      { id: 'b', text: "When the pivot is chosen", isCorrect: false },
      { id: 'c', text: "When the array is sorted", isCorrect: false },
      { id: 'd', text: "When all elements are equal", isCorrect: false }
    ]
  },
  {
    id: 11,
    question: "What is the space complexity of Quick Sort in the average case?",
    options: [
      { id: 'a', text: "O(n)", isCorrect: false },
      { id: 'b', text: "O(log n)", isCorrect: true },
      { id: 'c', text: "O(n log n)", isCorrect: false },
      { id: 'd', text: "O(1)", isCorrect: false }
    ]
  },
  {
    id: 12,
    question: "Which factor can significantly impact the performance of Quick Sort?",
    options: [
      { id: 'a', text: "Choice of pivot", isCorrect: true },
      { id: 'b', text: "Array size only", isCorrect: false },
      { id: 'c', text: "Number of unique elements", isCorrect: false },
      { id: 'd', text: "Data type of elements", isCorrect: false }
    ]
  },
  {
    id: 13,
    question: "What does the term 'stable sort' mean?",
    options: [
      { id: 'a', text: "It maintains the relative order of equal elements", isCorrect: true },
      { id: 'b', text: "It is faster than other sorts", isCorrect: false },
      { id: 'c', text: "It uses less memory", isCorrect: false },
      { id: 'd', text: "It can sort in reverse order", isCorrect: false }
    ]
  },
  {
    id: 14,
    question: "How is Quick Sort generally implemented?",
    options: [
      { id: 'a', text: "Using a stack", isCorrect: false },
      { id: 'b', text: "Using recursion", isCorrect: true },
      { id: 'c', text: "Using a queue", isCorrect: false },
      { id: 'd', text: "Using iteration only", isCorrect: false }
    ]
  },
  {
    id: 15,
    question: "What happens if the pivot is chosen poorly in Quick Sort?",
    options: [
      { id: 'a', text: "It will still sort correctly", isCorrect: false },
      { id: 'b', text: "It can lead to O(n^2) performance", isCorrect: true },
      { id: 'c', text: "It will improve performance", isCorrect: false },
      { id: 'd', text: "It will not affect the outcome", isCorrect: false }
    ]
  },
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

