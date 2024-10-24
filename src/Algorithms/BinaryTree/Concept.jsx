import React from 'react';
import binaryTreeExample from './binary-tree-example.png';
import traversalExample from './traversal-example.png';

const Concept = () => {
    return (
        <div style={{fontSize:"1.3rem", margin:"0 50px"}}>
            
            <h2>What is a Binary Tree?</h2>
            <p>A Binary Tree is a hierarchical data structure in which each node has at most two children, referred to as the left child and the right child. 
                A binary tree starts with a single node, called the root, and branches into left and right subtrees.
            </p>

            <h2>Types of Binary Trees</h2>
            <p>Binary trees can be categorized into different types depending on their structure:</p>
            <ul>
                <li><b>Full Binary Tree:</b> A tree where every node has 0 or 2 children.</li>
                <li><b>Complete Binary Tree:</b> All levels are completely filled except possibly the last, which is filled from left to right.</li>
                <li><b>Perfect Binary Tree:</b> A tree where all interior nodes have two children and all leaves are at the same level.</li>
                <li><b>Balanced Binary Tree:</b> A tree where the height of the left and right subtrees differ by at most one for every node.</li>
            </ul>

            <h2>Pictorial Representation of a Binary Tree</h2>
            <img src={binaryTreeExample} alt="Binary Tree Example" />

            <p>In a binary tree, every node has three components:</p>
            <ul>
                <li><b>Data:</b> The value or information stored in the node.</li>
                <li><b>Left Child:</b> A pointer/reference to the left child node (can be null if no child exists).</li>
                <li><b>Right Child:</b> A pointer/reference to the right child node (can be null if no child exists).</li>
            </ul>

            <h2>Binary Tree Traversal</h2>
            <p>Traversing a binary tree means visiting every node in a particular order. There are three main types of binary tree traversal:</p>
            <ul>
                <li><b>In-order Traversal:</b> Left subtree, Root, Right subtree (LNR).</li>
                <li><b>Pre-order Traversal:</b> Root, Left subtree, Right subtree (NLR).</li>
                <li><b>Post-order Traversal:</b> Left subtree, Right subtree, Root (LRN).</li>
            </ul>

            <h2>Pictorial Representation of Tree Traversal</h2>
            <img src={traversalExample} alt="Traversal Example" />

            <h2>Steps to Insert a Node in a Binary Tree</h2>
            <ul>
                <li><b>STEP 1:</b> Start at the root node.</li>
                <li><b>STEP 2:</b> Compare the new value with the root. If the new value is less, move to the left child; if greater, move to the right child.</li>
                <li><b>STEP 3:</b> Repeat this process for each node, moving down the tree until you find an empty spot to insert the new node.</li>
                <li><b>STEP 4:</b> Insert the new node in the correct position, maintaining the binary tree structure.</li>
            </ul>

            <h2>Steps to Delete a Node from a Binary Tree</h2>
            <ul>
                <li><b>STEP 1:</b> Find the node to be deleted.</li>
                <li><b>STEP 2:</b> If the node has no children, simply remove it.</li>
                <li><b>STEP 3:</b> If the node has one child, replace the node with its child.</li>
                <li><b>STEP 4:</b> If the node has two children, find its in-order successor (smallest value in the right subtree), replace the node with it, and delete the in-order successor.</li>
            </ul>
        </div>
    );
};

export default Concept;
