import React from 'react';
import ReactPlayer from 'react-player';
import insertionatendcopy from './photoslinkedlist/Insertion-at-the-End-in-Doubly-Linked-List-copy.png';
import doublelinkedlist from './photoslinkedlist/Node-Structure-of-Doubly-Linked-List.png';
import NodeDefinition from './copycode/nodedefination';

const Learning = () => {
    const videoUrl = "https://youtu.be/e9NG_a6Z0mg?si=bI9XikSOqIYDbYN1";

    return (
        <div style={{fontSize:"1.3rem", margin:"0 50px"}}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div style={{ borderRadius: "25px", overflow: "hidden", width: "800px", 
                    height: "450px", boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
                    <ReactPlayer
                        url={videoUrl}
                        controls
                        width="100%"
                        height="100%"
                    />
                </div>
            </div>
            <h2>What is a Doubly Linked List?</h2>
            <p>
                A doubly linked list is a data structure that consists of a set of nodes, 
                each of which contains a value and two pointers, one pointing to the previous 
                node in the list and one pointing to the next node in the list. This allows 
                for efficient traversal of the list in both directions, making it suitable for 
                applications where frequent insertions and deletions are required.
            </p>

            {/* Wrapping image in a div for centering */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={insertionatendcopy} alt="Insertion at the end copy" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            <h2>Representation of Doubly Linked List in Data Structure</h2>
            <p>In a data structure, a doubly linked list is represented using nodes that have three fields:</p>
            <ul>
                <li>Data</li>
                <li>A pointer to the next node (next)</li>
                <li>A pointer to the previous node (prev)</li>
            </ul>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={doublelinkedlist} alt="Insertion at the end copy" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            <h2>Node Definition</h2>
            <NodeDefinition/>
            <p>Each node in a Doubly Linked List contains the data it holds, a pointer to the next node in the list, and a pointer to the previous node in the list. By linking these nodes together through the next and prev pointers, we can traverse the list in both directions (forward and backward), which is a key feature of a Doubly Linked List.</p>
            <nodedefination/>
            <h2>Operations on Doubly Linked List</h2>
           <ul>
            <li>Traversal in Doubly Linked List</li>
            <li>Searching in Doubly Linked List</li>
            <li>Finding Length of Doubly Linked List</li>
            <li>Insertion in Doubly Linked List:</li>
                <ul>
                    <li>Insertion at the beginning of Doubly Linked List</li>
                    <li>Insertion at the end of the Doubly Linked List</li>
                    <li>Insertion at a specific position in Doubly Linked List</li>
                </ul>
            <li>Deletion in Doubly Linked List:</li>
            <ul>
                <li>Deletion of a node at the beginning of Doubly Linked List
                </li>
                <li>Deletion of a node at the end of Doubly Linked List
                </li>
                <li>Deletion of a node at a specific position in Doubly Linked List
                </li>

            </ul>    
           </ul>
           <p>Let’s go through each of the operations mentioned above, one by one</p>
        </div>
    );
};

export default Learning;
