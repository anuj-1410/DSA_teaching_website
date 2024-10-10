import React, { useState, useEffect, useRef } from 'react';
import './Demo.css';

// Define a TreeNode class for the binary tree structure
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const BinaryTree = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [deleteValue, setDeleteValue] = useState('');
  const [foundNode, setFoundNode] = useState(null);
  const [root, setRoot] = useState(null);
  const canvasRef = useRef(null);

  const insertNode = (node, value) => {
    if (value < node.value) {
      if (node.left === null) {
        node.left = new TreeNode(value);
      } else {
        node.left = insertNode({ ...node.left }, value);
      }
    } else {
      if (node.right === null) {
        node.right = new TreeNode(value);
      } else {
        node.right = insertNode({ ...node.right }, value);
      }
    }
    return node;
  };

  const deleteNode = (node, value) => {
    if (node === null) return null;

    if (value < node.value) {
      node.left = deleteNode({ ...node.left }, value);
    } else if (value > node.value) {
      node.right = deleteNode({ ...node.right }, value);
    } else {
      if (node.left === null) return node.right;
      if (node.right === null) return node.left;

      let successor = findMin(node.right);
      node.value = successor.value;
      node.right = deleteNode(node.right, successor.value);
    }
    return node;
  };

  const findMin = (node) => {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  };

  const handleInsert = () => {
    if (!inputValue) return;
    const value = parseInt(inputValue);

    if (!root) {
      setRoot(new TreeNode(value));
    } else {
      setRoot(insertNode({ ...root }, value));
    }

    setInputValue('');
  };

  const handleDelete = () => {
    if (!deleteValue) return;
    const value = parseInt(deleteValue);

    setRoot(deleteNode({ ...root }, value));
    setDeleteValue('');
  };

  const searchNode = (node, value) => {
    if (node === null) return null;

    if (node.value === value) return node;
    if (value < node.value) return searchNode(node.left, value);
    return searchNode(node.right, value);
  };

  const handleSearch = () => {
    if (!searchValue) return;
    const value = parseInt(searchValue);

    const found = searchNode(root, value);
    setFoundNode(found);
  };

  const drawNode = (ctx, node, x, y, xOffset) => {
    if (!node) return;

    if (foundNode && foundNode.value === node.value) {
      ctx.fillStyle = 'lightgreen';
      ctx.beginPath();
      ctx.arc(x, y, 20, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = 'black';
    } else {
      ctx.beginPath();
      ctx.arc(x, y, 20, 0, 2 * Math.PI);
      ctx.stroke();
    }

    ctx.font = '15px Arial';
    ctx.fillText(node.value, x - 5, y + 5);

    if (node.left) {
      ctx.moveTo(x, y);
      ctx.lineTo(x - xOffset, y + 60);
      ctx.stroke();
      drawNode(ctx, node.left, x - xOffset, y + 60, xOffset / 2);
    }

    if (node.right) {
      ctx.moveTo(x, y);
      ctx.lineTo(x + xOffset, y + 60);
      ctx.stroke();
      drawNode(ctx, node.right, x + xOffset, y + 60, xOffset / 2);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (root) {
      drawNode(ctx, root, canvas.width / 2, 40, canvas.width / 4);
    }
  }, [root, foundNode]);

  return (
    <div className="container">
      <h1 className="title">Binary Tree Animation</h1>
      <div className="input-section">
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter node value"
          className="input-field"
        />
        <button onClick={handleInsert} className="insert-button">
          Insert Node
        </button>
      </div>
      <div className="search-section">
        <input
          type="number"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Enter value to search"
          className="input-field"
        />
        <button onClick={handleSearch} className="search-button">
          Search Node
        </button>
      </div>
      <div className="delete-section">
        <input
          type="number"
          value={deleteValue}
          onChange={(e) => setDeleteValue(e.target.value)}
          placeholder="Enter value to delete"
          className="input-field"
        />
        <button onClick={handleDelete} className="delete-button">
          Delete Node
        </button>
      </div>
      <canvas ref={canvasRef} width={800} height={600} className="tree-canvas"></canvas>
      {foundNode ? <p>Node {foundNode.value} found in the tree!</p> : searchValue && <p>Node not found!</p>}
    </div>
  );
};

export default BinaryTree;
