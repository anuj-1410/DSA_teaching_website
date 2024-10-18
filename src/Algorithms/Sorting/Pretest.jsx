import React, { useState, useEffect, useCallback } from 'react';
import '../Quiz.css';

const questions = [
    {
      id: 1,
      question: "What does sorting an array do?",
      options: [
        { id: 'a', text: "Arranges the elements in order", isCorrect: true },
        { id: 'b', text: "Removes duplicate elements", isCorrect: false },
        { id: 'c', text: "Increases the size of the array", isCorrect: false },
        { id: 'd', text: "Reverses the order of elements", isCorrect: false }
      ]
    },
    {
      id: 2,
      question: "Which operation is commonly performed on arrays?",
      options: [
        { id: 'a', text: "Searching for an element", isCorrect: true },
        { id: 'b', text: "Creating new arrays", isCorrect: false },
        { id: 'c', text: "Only inserting elements", isCorrect: false },
        { id: 'd', text: "Only deleting elements", isCorrect: false }
      ]
    },
    {
      id: 3,
      question: "What is the primary benefit of sorting an array?",
      options: [
        { id: 'a', text: "Faster searching", isCorrect: true },
        { id: 'b', text: "More memory", isCorrect: false },
        { id: 'c', text: "Larger elements", isCorrect: false },
        { id: 'd', text: "Fewer elements", isCorrect: false }
      ]
    },
    {
      id: 4,
      question: "In an array, how do you access the first element?",
      options: [
        { id: 'a', text: "array[0]", isCorrect: true },
        { id: 'b', text: "array[1]", isCorrect: false },
        { id: 'c', text: "array[first]", isCorrect: false },
        { id: 'd', text: "array[start]", isCorrect: false }
      ]
    },
    {
      id: 5,
      question: "What is an array?",
      options: [
        { id: 'a', text: "A collection of items stored at contiguous memory locations", isCorrect: true },
        { id: 'b', text: "A type of list", isCorrect: false },
        { id: 'c', text: "A function to sort numbers", isCorrect: false },
        { id: 'd', text: "A method for searching", isCorrect: false }
      ]
    },
    {
      id: 6,
      question: "What happens to the order of elements in a sorted array?",
      options: [
        { id: 'a', text: "It becomes organized", isCorrect: true },
        { id: 'b', text: "It becomes random", isCorrect: false },
        { id: 'c', text: "It stays the same", isCorrect: false },
        { id: 'd', text: "It duplicates elements", isCorrect: false }
      ]
    },
    {
      id: 7,
      question: "How do you find the length of an array in JavaScript?",
      options: [
        { id: 'a', text: "array.size()", isCorrect: false },
        { id: 'b', text: "array.length", isCorrect: true },
        { id: 'c', text: "array.count()", isCorrect: false },
        { id: 'd', text: "array.length()", isCorrect: false }
      ]
    },
    {
      id: 8,
      question: "Which of the following is true about arrays?",
      options: [
        { id: 'a', text: "They can hold multiple data types", isCorrect: true },
        { id: 'b', text: "They can only hold integers", isCorrect: false },
        { id: 'c', text: "They cannot be resized", isCorrect: false },
        { id: 'd', text: "They must be sorted", isCorrect: false }
      ]
    },
    {
      id: 9,
      question: "What is the time complexity of searching an unsorted array using linear search?",
      options: [
        { id: 'a', text: "O(1)", isCorrect: false },
        { id: 'b', text: "O(n)", isCorrect: true },
        { id: 'c', text: "O(log n)", isCorrect: false },
        { id: 'd', text: "O(n^2)", isCorrect: false }
      ]
    },
    {
      id: 10,
      question: "What is the result of sorting the array [3, 1, 2]?",
      options: [
        { id: 'a', text: "[1, 2, 3]", isCorrect: true },
        { id: 'b', text: "[3, 2, 1]", isCorrect: false },
        { id: 'c', text: "[2, 3, 1]", isCorrect: false },
        { id: 'd', text: "[1, 3, 2]", isCorrect: false }
      ]
    },
    {
      id: 11,
      question: "Which data structure is best for storing a sequence of numbers?",
      options: [
        { id: 'a', text: "Array", isCorrect: true },
        { id: 'b', text: "Tree", isCorrect: false },
        { id: 'c', text: "Graph", isCorrect: false },
        { id: 'd', text: "Set", isCorrect: false }
      ]
    },
    {
      id: 12,
      question: "What happens when you insert an element into a sorted array?",
      options: [
        { id: 'a', text: "The array remains sorted", isCorrect: false },
        { id: 'b', text: "The array may need to be rearranged", isCorrect: true },
        { id: 'c', text: "The array expands automatically", isCorrect: false },
        { id: 'd', text: "The array deletes the largest element", isCorrect: false }
      ]
    },
    {
      id: 13,
      question: "How do you remove the last element from an array in JavaScript?",
      options: [
        { id: 'a', text: "array.removeLast()", isCorrect: false },
        { id: 'b', text: "array.pop()", isCorrect: true },
        { id: 'c', text: "array.delete()", isCorrect: false },
        { id: 'd', text: "array.shift()", isCorrect: false }
      ]
    },
    {
      id: 14,
      question: "What is a key feature of a sorted array?",
      options: [
        { id: 'a', text: "Elements are in random order", isCorrect: false },
        { id: 'b', text: "Elements are in a specific order", isCorrect: true },
        { id: 'c', text: "It can only contain numbers", isCorrect: false },
        { id: 'd', text: "It cannot be accessed randomly", isCorrect: false }
      ]
    },
    {
      id: 15,
      question: "What does the term 'array index' refer to?",
      options: [
        { id: 'a', text: "The position of an element in the array", isCorrect: true },
        { id: 'b', text: "The value of an element", isCorrect: false },
        { id: 'c', text: "The size of the array", isCorrect: false },
        { id: 'd', text: "The type of elements in the array", isCorrect: false }
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