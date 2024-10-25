import React, { useState } from 'react';
import './nodedefination.css';

const InsertEnd = () => {
    const codeString = `class Node {
    int data;
    Node next, prev;

    Node(int newData) {
        data = newData;
        next = prev = null;
    }
}

class Main {
    public static Node insertEnd(Node head, int newData) {
        Node newNode = new Node(newData);

        if (head == null) {
            head = newNode;
        } else {
            Node curr = head;
            while (curr.next != null) {
                curr = curr.next;
            }
            curr.next = newNode;
            newNode.prev = curr;
        }

        return head;
    }

    public static void printList(Node head) {
        Node curr = head;
        while (curr != null) {
            System.out.print(curr.data + " ");
            curr = curr.next;
        }
        System.out.println();
    }

    public static void main(String[] args) {
        Node head = new Node(1);
        head.next = new Node(2);
        head.next.prev = head;
        head.next.next = new Node(3);
        head.next.next.prev = head.next;

        System.out.println("Original Linked List: ");
        printList(head);

        System.out.println("Inserting Node with data 4 at the end: ");
        int data = 4;
        head = insertEnd(head, data);

        printList(head);
    }
}`;

    const [copySuccess, setCopySuccess] = useState(false);
    const [output, setOutput] = useState('');

    const generateOutput = () => {
        const originalList = "Original Linked List:\n1 2 3\n";
        const updatedList = "Inserting Node with data 4 at the end:\n1 2 3 4\n";
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

export default InsertEnd;
