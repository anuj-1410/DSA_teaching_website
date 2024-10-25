import React, { useState } from 'react';
import './nodedefination.css';

const Traversal = () => {
    const codeString = `
class Node {
    int data; 
    Node next; 
    Node prev; 

    public Node(int data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class Main {
    static void forwardTraversal(Node head) {
        Node curr = head;
        while (curr != null) {
            System.out.print(curr.data + " ");
            curr = curr.next;
        }
        System.out.println();
    }

    static void backwardTraversal(Node tail) {
        Node curr = tail;
        while (curr != null) {
            System.out.print(curr.data + " ");
            curr = curr.prev;
        }
        System.out.println();
    }

    public static void main(String[] args) {
        Node head = new Node(1);
        Node second = new Node(2);
        Node third = new Node(3);

        head.next = second;
        second.prev = head;
        second.next = third;
        third.prev = second;

        System.out.println("Forward Traversal:");
        forwardTraversal(head);

        System.out.println("Backward Traversal:");
        backwardTraversal(third);
    }
}`;

    const [copySuccess, setCopySuccess] = useState(false);
    const [output, setOutput] = useState('');

    const generateOutput = () => {
        const forwardOutput = 'Forward Traversal:\n1 2 3 \n';
        const backwardOutput = 'Backward Traversal:\n3 2 1 \n';
        setOutput(forwardOutput + backwardOutput);
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

export default Traversal;
