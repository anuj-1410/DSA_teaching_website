import React, { useState, useEffect, useCallback } from 'react';
import '../Quiz.css';

const questions = [
  {
    id: 1,
    question: "What is the time complexity of finding the height of a Binary Search Tree (BST) in the worst case?",
    options: [
      { id: 'a', text: "O(log n)", isCorrect: false },
      { id: 'b', text: "O(n)", isCorrect: true },
      { id: 'c', text: "O(n log n)", isCorrect: false },
      { id: 'd', text: "O(1)", isCorrect: false }
    ]
  },
  {
    id: 2,
    question: "In a skewed Binary Search Tree (BST), what is the worst-case time complexity for search, insert, or delete operations?",
    options: [
      { id: 'a', text: "O(n)", isCorrect: true },
      { id: 'b', text: "O(log n)", isCorrect: false },
      { id: 'c', text: "O(n log n)", isCorrect: false },
      { id: 'd', text: "O(1)", isCorrect: false }
    ]
  },
  {
    id: 3,
    question: "What is the purpose of balancing a Binary Search Tree?",
    options: [
      { id: 'a', text: "To minimize space complexity", isCorrect: false },
      { id: 'b', text: "To reduce the height of the tree and optimize operations", isCorrect: true },
      { id: 'c', text: "To ensure even distribution of nodes", isCorrect: false },
      { id: 'd', text: "To increase the depth of the tree", isCorrect: false }
    ]
  },
  {
    id: 4,
    question: "Which of the following is true regarding the AVL tree compared to a regular Binary Search Tree (BST)?",
    options: [
      { id: 'a', text: "An AVL tree may have unbalanced subtrees", isCorrect: false },
      { id: 'b', text: "AVL tree has a worse time complexity for search than a regular BST", isCorrect: false },
      { id: 'c', text: "An AVL tree is a self-balancing Binary Search Tree", isCorrect: true },
      { id: 'd', text: "A regular BST has a lower height than an AVL tree", isCorrect: false }
    ]
  },
  {
    id: 5,
    question: "Which of the following techniques is used to restore balance in an AVL tree?",
    options: [
      { id: 'a', text: "Balancing via rehashing", isCorrect: false },
      { id: 'b', text: "Rotation", isCorrect: true },
      { id: 'c', text: "Binary heap adjustment", isCorrect: false },
      { id: 'd', text: "Partitioning", isCorrect: false }
    ]
  },
  {
    id: 6,
    question: "In a BST, which traversal method would give you the elements in non-increasing order?",
    options: [
      { id: 'a', text: "Pre-order traversal", isCorrect: false },
      { id: 'b', text: "In-order traversal", isCorrect: false },
      { id: 'c', text: "Post-order traversal", isCorrect: false },
      { id: 'd', text: "Reverse in-order traversal", isCorrect: true }
    ]
  },
  {
    id: 7,
    question: "Which of the following statements is TRUE about deleting a node with two children in a BST?",
    options: [
      { id: 'a', text: "Replace the node with its in-order successor or predecessor", isCorrect: true },
      { id: 'b', text: "Delete the entire subtree", isCorrect: false },
      { id: 'c', text: "Replace the node with its left child", isCorrect: false },
      { id: 'd', text: "Replace the node with its right child", isCorrect: false }
    ]
  },
  {
    id: 8,
    question: "In a BST, what happens when you insert values in a sorted (increasing) order?",
    options: [
      { id: 'a', text: "The tree becomes balanced", isCorrect: false },
      { id: 'b', text: "The tree becomes skewed to the right", isCorrect: true },
      { id: 'c', text: "The tree becomes skewed to the left", isCorrect: false },
      { id: 'd', text: "The tree becomes a complete binary tree", isCorrect: false }
    ]
  },
  {
    id: 9,
    question: "What is the maximum number of nodes in a BST of height h?",
    options: [
      { id: 'a', text: "2^h", isCorrect: false },
      { id: 'b', text: "2^h - 1", isCorrect: true },
      { id: 'c', text: "h^2", isCorrect: false },
      { id: 'd', text: "2h", isCorrect: false }
    ]
  },
  {
    id: 10,
    question: "Which traversal method is best suited to delete all nodes in a BST?",
    options: [
      { id: 'a', text: "In-order traversal", isCorrect: false },
      { id: 'b', text: "Post-order traversal", isCorrect: true },
      { id: 'c', text: "Pre-order traversal", isCorrect: false },
      { id: 'd', text: "Level-order traversal", isCorrect: false }
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
