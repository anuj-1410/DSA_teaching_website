
import React, { useState } from 'react';
import './nodedefination.css';

const NodeDefinition = () => {
    const codeString = `class Node {
    // To store the Value or data.
    int data;

    // Reference to the Previous Node
    Node prev;

    // Reference to the next Node
    Node next;

    // Constructor
    Node(int d) {
       data = d;
       prev = next = null;      
    }
};`;

    const [copySuccess, setCopySuccess] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(codeString)
            .then(() => {
                setCopySuccess(true);
                setTimeout(() => setCopySuccess(false), 2000); // Reset after 2 seconds
            })
            .catch(() => setCopySuccess(false));
    };

    return (
        <div className="code-container">
          
            <pre>
                <code>{codeString}</code>
            </pre>
            <button onClick={copyToClipboard} className="copy-button">
                {copySuccess ? 'Copied!' : 'Copy Code'}
            </button>
            {copySuccess && <div className="copy-message">Code copied to clipboard!</div>}
        </div>
    );
};

export default NodeDefinition;
