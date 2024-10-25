import React, { useState } from 'react';
import './nodedefination.css';

const InsertBeginning = () => {
    const codeString = `class Node {
    int data;
    Node prev, next;

    Node(int d) {
        data = d;
        prev = null;
        next = null;
    }
}

class Main {
    static Node insertBegin(Node head, int data) {
        Node new_node = new Node(data);
        new_node.next = head;
        if (head != null) {
            head.prev = new_node;
        }
        return new_node;
    }

    static void printList(Node head) {
        Node curr = head;
        while (curr != null) {
            System.out.print(curr.data + " ");
            curr = curr.next;
        }
        System.out.println();
    }

    public static void main(String[] args) {
        Node head = new Node(2);
        head.next = new Node(3);
        head.next.prev = head;
        head.next.next = new Node(4);
        head.next.next.prev = head.next;

        System.out.print("Original Linked List: ");
        printList(head);

        head = insertBegin(head, 1);

        System.out.print("After inserting Node 1 at the front: ");
        printList(head);
    }
}`;

    const [copySuccess, setCopySuccess] = useState(false);
    const [output, setOutput] = useState('');

    const generateOutput = () => {
        const originalList = "Original Linked List: \n2 3 4\n";
        const updatedList = "After inserting Node 1 at the front: \n1 2 3 4\n";
        setOutput(originalList + updatedList);
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

export default InsertBeginning;
