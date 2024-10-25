import React, { useState } from 'react';
import './nodedefination.css';

const FindLength = () => {
    const codeString = `class Node {
    int data; 
    Node prev; 
    Node next;

    public Node(int val) { 
        data = val; 
        prev = null; 
        next = null; 
    }
}

class Main {
    static int FindLength(Node head) {
        int count = 0;
        for (Node cur = head; cur != null; cur = cur.next)
            count++;
        return count;
    }

    public static void main(String[] args) {
        Node head = new Node(1);
        Node second = new Node(2);
        Node third = new Node(3);
        
        head.next = second; 
        second.prev = head;
        second.next = third; 
        third.prev = second;

        System.out.println("Length of doubly linked list: " + FindLength(head));
    }
}`;

    const [copySuccess, setCopySuccess] = useState(false);
    const [output, setOutput] = useState('');

    const generateOutput = () => {
        const length = 3; // The length of the linked list created in the Java code
        setOutput(`Length of doubly linked list: ${length}`);
    };

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
            <button onClick={generateOutput} className="output-button">Run Code</button>
            {output && (
                <div className="output-container">
                    <h3>Output:</h3>
                    <pre>{output}</pre>
                </div>
            )}
        </div>
    );
};

export default FindLength;
