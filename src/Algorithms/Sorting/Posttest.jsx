import React, { useState, useEffect, useCallback } from 'react';
import '../Quiz.css';

const questions = [
    {
      id: 1,
      question: "Which of the following is true about Quick Sort?",
      options: [
        { id: 'a', text: "It can sort linked lists efficiently", isCorrect: false },
        { id: 'b', text: "It is always stable", isCorrect: false },
        { id: 'c', text: "It generally has a good performance on average", isCorrect: true },
        { id: 'd', text: "It requires O(n) additional space", isCorrect: false }
      ]
    },
    {
      id: 2,
      question: "What is the primary function of the partitioning process in Quick Sort?",
      options: [
        { id: 'a', text: "To sort the entire array", isCorrect: false },
        { id: 'b', text: "To separate elements based on the pivot", isCorrect: true },
        { id: 'c', text: "To merge two arrays", isCorrect: false },
        { id: 'd', text: "To remove duplicates", isCorrect: false }
      ]
    },
    {
      id: 3,
      question: "Which of the following sorting algorithms is not comparison-based?",
      options: [
        { id: 'a', text: "Quick Sort", isCorrect: false },
        { id: 'b', text: "Bubble Sort", isCorrect: false },
        { id: 'c', text: "Counting Sort", isCorrect: true },
        { id: 'd', text: "Merge Sort", isCorrect: false }
      ]
    },
    {
      id: 4,
      question: "When implementing Quick Sort, what is a common strategy for selecting a pivot?",
      options: [
        { id: 'a', text: "Choosing the median of the first, middle, and last elements", isCorrect: true },
        { id: 'b', text: "Always choosing the first element", isCorrect: false },
        { id: 'c', text: "Randomly selecting from the sorted array", isCorrect: false },
        { id: 'd', text: "Selecting the largest element", isCorrect: false }
      ]
    },
    {
      id: 5,
      question: "Which statement is true about the time complexity of sorting algorithms?",
      options: [
        { id: 'a', text: "All sorting algorithms have the same time complexity", isCorrect: false },
        { id: 'b', text: "Quick Sort is generally faster than Merge Sort on average", isCorrect: true },
        { id: 'c', text: "Bubble Sort is faster than Quick Sort", isCorrect: false },
        { id: 'd', text: "Insertion Sort is always slower than Quick Sort", isCorrect: false }
      ]
    },
    {
      id: 6,
      question: "What is the effect of a stable sort on equal elements?",
      options: [
        { id: 'a', text: "They can change order", isCorrect: false },
        { id: 'b', text: "Their original order is preserved", isCorrect: true },
        { id: 'c', text: "They are removed from the array", isCorrect: false },
        { id: 'd', text: "They are duplicated", isCorrect: false }
      ]
    },
    {
      id: 7,
      question: "Which of the following describes the best case for Quick Sort?",
      options: [
        { id: 'a', text: "The pivot divides the array into two equal halves", isCorrect: true },
        { id: 'b', text: "The array is already sorted", isCorrect: false },
        { id: 'c', text: "The array contains all identical elements", isCorrect: false },
        { id: 'd', text: "The pivot is the smallest element", isCorrect: false }
      ]
    },
    {
      id: 8,
      question: "What type of array structure is generally most efficient for Quick Sort?",
      options: [
        { id: 'a', text: "Linked list", isCorrect: false },
        { id: 'b', text: "Dynamic array", isCorrect: true },
        { id: 'c', text: "Fixed-size array", isCorrect: false },
        { id: 'd', text: "Hash table", isCorrect: false }
      ]
    },
    {
      id: 9,
      question: "How does Quick Sort handle duplicate elements?",
      options: [
        { id: 'a', text: "It removes duplicates", isCorrect: false },
        { id: 'b', text: "It sorts them to the beginning", isCorrect: false },
        { id: 'c', text: "It places them in the correct order without affecting the sort", isCorrect: true },
        { id: 'd', text: "It cannot handle duplicates", isCorrect: false }
      ]
    },
    {
      id: 10,
      question: "What is the significance of the 'cutoff' in Quick Sort implementations?",
      options: [
        { id: 'a', text: "To switch to another sorting algorithm for small subarrays", isCorrect: true },
        { id: 'b', text: "To determine when to stop recursion", isCorrect: false },
        { id: 'c', text: "To select the pivot", isCorrect: false },
        { id: 'd', text: "To limit the number of comparisons", isCorrect: false }
      ]
    },
    {
      id: 11,
      question: "Which sorting algorithm is best suited for sorting a nearly sorted array?",
      options: [
        { id: 'a', text: "Bubble Sort", isCorrect: false },
        { id: 'b', text: "Quick Sort", isCorrect: true },
        { id: 'c', text: "Selection Sort", isCorrect: false },
        { id: 'd', text: "Heap Sort", isCorrect: false }
      ]
    },
    {
      id: 12,
      question: "What is the main advantage of using Quick Sort over other sorting algorithms?",
      options: [
        { id: 'a', text: "It is a stable sort", isCorrect: false },
        { id: 'b', text: "It usually performs better for larger datasets", isCorrect: true },
        { id: 'c', text: "It uses less memory than Merge Sort", isCorrect: false },
        { id: 'd', text: "It is always faster", isCorrect: false }
      ]
    },
    {
      id: 13,
      question: "What does 'in-place' mean in the context of Quick Sort?",
      options: [
        { id: 'a', text: "It sorts the data without additional memory allocation", isCorrect: true },
        { id: 'b', text: "It sorts data in reverse order", isCorrect: false },
        { id: 'c', text: "It uses multiple arrays for sorting", isCorrect: false },
        { id: 'd', text: "It requires auxiliary storage", isCorrect: false }
      ]
    },
    {
      id: 14,
      question: "Which of the following describes the process of 'partitioning' in Quick Sort?",
      options: [
        { id: 'a', text: "Splitting the array into three parts", isCorrect: false },
        { id: 'b', text: "Rearranging elements around a pivot", isCorrect: true },
        { id: 'c', text: "Sorting the left half of the array", isCorrect: false },
        { id: 'd', text: "Merging two sorted arrays", isCorrect: false }
      ]
    },
    {
      id: 15,
      question: "Why is Quick Sort considered a good choice for sorting large datasets?",
      options: [
        { id: 'a', text: "It guarantees O(n log n) performance", isCorrect: false },
        { id: 'b', text: "It is simple to implement", isCorrect: false },
        { id: 'c', text: "It is generally faster than other O(n log n) algorithms", isCorrect: true },
        { id: 'd', text: "It is stable", isCorrect: false }
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