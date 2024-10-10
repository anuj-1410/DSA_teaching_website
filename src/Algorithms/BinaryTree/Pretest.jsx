import React, { useState, useEffect, useCallback } from 'react';
import '../Quiz.css';

const questions = [
  {
    id: 1,
    question: "What is a Binary Search Tree (BST)?",
    options: [
      { id: 'a', text: "A tree where each node has exactly two children", isCorrect: false },
      { id: 'b', text: "A tree where the left child is smaller and the right child is larger than the parent", isCorrect: true },
      { id: 'c', text: "A tree where all nodes have the same value", isCorrect: false },
      { id: 'd', text: "A tree where the root is always greater than its children", isCorrect: false }
    ]
  },
  {
    id: 2,
    question: "What is the time complexity of searching for a value in a balanced BST?",
    options: [
      { id: 'a', text: "O(n)", isCorrect: false },
      { id: 'b', text: "O(log n)", isCorrect: true },
      { id: 'c', text: "O(1)", isCorrect: false },
      { id: 'd', text: "O(n log n)", isCorrect: false }
    ]
  },
  {
    id: 3,
    question: "Which traversal of a BST gives the nodes in ascending order?",
    options: [
      { id: 'a', text: "Pre-order", isCorrect: false },
      { id: 'b', text: "Post-order", isCorrect: false },
      { id: 'c', text: "In-order", isCorrect: true },
      { id: 'd', text: "Level-order", isCorrect: false }
    ]
  },
  {
    id: 4,
    question: "What is the worst-case time complexity for inserting a value into an unbalanced BST?",
    options: [
      { id: 'a', text: "O(1)", isCorrect: false },
      { id: 'b', text: "O(n)", isCorrect: true },
      { id: 'c', text: "O(log n)", isCorrect: false },
      { id: 'd', text: "O(n^2)", isCorrect: false }
    ]
  },
  {
    id: 5,
    question: "In a BST, which node has no parent?",
    options: [
      { id: 'a', text: "The leaf node", isCorrect: false },
      { id: 'b', text: "The left child of the root", isCorrect: false },
      { id: 'c', text: "The root node", isCorrect: true },
      { id: 'd', text: "The right child of the root", isCorrect: false }
    ]
  },
  {
    id: 6,
    question: "How do you delete a node in a BST that has two children?",
    options: [
      { id: 'a', text: "Replace it with its left child", isCorrect: false },
      { id: 'b', text: "Replace it with its right child", isCorrect: false },
      { id: 'c', text: "Replace it with its in-order predecessor or successor", isCorrect: true },
      { id: 'd', text: "Remove the node and restructure the entire tree", isCorrect: false }
    ]
  },
  {
    id: 7,
    question: "Which of the following is true for a Binary Search Tree?",
    options: [
      { id: 'a', text: "The left subtree contains only nodes with values greater than the root", isCorrect: false },
      { id: 'b', text: "The right subtree contains only nodes with values smaller than the root", isCorrect: false },
      { id: 'c', text: "The left subtree contains only nodes with values smaller than the root", isCorrect: true },
      { id: 'd', text: "Both left and right subtrees contain nodes with values equal to the root", isCorrect: false }
    ]
  },
  {
    id: 8,
    question: "What is the height of a Binary Search Tree?",
    options: [
      { id: 'a', text: "The number of edges in the longest path from root to a leaf", isCorrect: true },
      { id: 'b', text: "The total number of nodes in the tree", isCorrect: false },
      { id: 'c', text: "The number of nodes in the longest path from root to any node", isCorrect: false },
      { id: 'd', text: "The number of nodes in the shortest path from root to a leaf", isCorrect: false }
    ]
  },
  {
    id: 9,
    question: "What is the in-order predecessor of a node in a BST?",
    options: [
      { id: 'a', text: "The largest node in its left subtree", isCorrect: true },
      { id: 'b', text: "The smallest node in its right subtree", isCorrect: false },
      { id: 'c', text: "The parent node", isCorrect: false },
      { id: 'd', text: "The root node", isCorrect: false }
    ]
  },
  {
    id: 10,
    question: "Which property of a BST ensures efficient searching, insertion, and deletion?",
    options: [
      { id: 'a', text: "Each node has at most two children", isCorrect: false },
      { id: 'b', text: "Nodes are stored in levels", isCorrect: false },
      { id: 'c', text: "Each left child is smaller, and each right child is larger than the parent", isCorrect: true },
      { id: 'd', text: "The tree is always balanced", isCorrect: false }
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
