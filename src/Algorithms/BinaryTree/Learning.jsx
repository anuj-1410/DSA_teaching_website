import React from 'react';
import ReactPlayer from 'react-player';

const Learning = () => {
    const videoUrl = "https://youtu.be/-DzowlcaUmE?si=pgS8u1P7pwvJWJyG";  // Change to an appropriate binary tree video link

    return (
        <div style={{ fontSize: "1.3rem", margin: "0 50px" }}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div style={{ borderRadius: "25px", overflow: "hidden", width: "800px", 
                    height: "450px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
                    <ReactPlayer
                        url={videoUrl}
                        controls
                        width="100%"
                        height="100%"
                    />
                </div>
            </div>
            <h2>What is a Binary Tree?</h2>
            <p>A Binary Tree is a hierarchical data structure in which each node has at most two children, referred to as the left child and the right child. It is a type of tree where every node can have either zero, one, or two children.</p>
            <p>Binary trees are widely used in applications such as expression parsing, searching, and hierarchical database structures due to their efficiency and simplicity.</p>

            <h2>Properties of Binary Trees</h2>
            <ul>
                <li><b>Root:</b> The topmost node in a binary tree.</li>
                <li><b>Leaf Node:</b> A node with no children (both left and right child are null).</li>
                <li><b>Height:</b> The length of the longest path from the root to a leaf node.</li>
                <li><b>Depth:</b> The distance from the root to a specific node.</li>
                <li><b>Subtree:</b> A portion of the binary tree which includes a node and its descendants.</li>
            </ul>

            <h2>Types of Binary Trees</h2>
            <p>Binary Trees can be categorized into several types, such as:</p>
            <ul>
                <li><b>Full Binary Tree:</b> Every node has either 0 or 2 children.</li>
                <li><b>Complete Binary Tree:</b> All levels are completely filled except possibly for the last level, which is filled from left to right.</li>
                <li><b>Perfect Binary Tree:</b> A binary tree in which all interior nodes have two children, and all leaves have the same depth.</li>
                <li><b>Balanced Binary Tree:</b> A binary tree where the height of the left and right subtrees of any node differ by at most one.</li>
            </ul>

            <h2>Operations on Binary Trees</h2>
            <p>Common operations performed on binary trees include:</p>
            <ul>
                <li><b>Insertion:</b> Adding a node to the binary tree.</li>
                <li><b>Deletion:</b> Removing a node from the binary tree.</li>
                <li><b>Traversal:</b> Visiting each node in the tree. Types of traversal include:</li>
                <ul>
                    <li>In-order traversal (Left, Root, Right)</li>
                    <li>Pre-order traversal (Root, Left, Right)</li>
                    <li>Post-order traversal (Left, Right, Root)</li>
                </ul>
                <li><b>Searching:</b> Finding a node in the binary tree.</li>
            </ul>

            <h2>Applications of Binary Trees</h2>
            <p>Binary trees are useful in many areas such as:</p>
            <ul>
                <li>Binary Search Trees (BSTs) for efficient searching and sorting.</li>
                <li>Heaps, a type of binary tree used in priority queues.</li>
                <li>Expression trees used in compilers for parsing expressions.</li>
                <li>File systems and hierarchical databases.</li>
            </ul>
        </div>
    );
};

export default Learning;
