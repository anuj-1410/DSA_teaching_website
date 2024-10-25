import React, { useState } from 'react';
import './nodedefination.css';

const InsertSpecific = () => {
    const codeString = `class Node {
    int data;
    Node next;
    Node prev;

    Node(int new_data) {
        data = new_data;
        next = prev = null;
    }
}

class Main {
    public static Node insertAtPosition(Node head, int pos, int new_data) {
        Node new_node = new Node(new_data);

        if (pos == 1) {
            new_node.next = head;
            if (head != null) {
                head.prev = new_node;
            }
            head = new_node;
            return head;
        }

        Node curr = head;
        for (int i = 1; i < pos - 1 && curr != null; ++i) {
            curr = curr.next;
        }

        if (curr == null) {
            System.out.println("Position is out of bounds.");
            return head;
        }

        new_node.prev = curr;
        new_node.next = curr.next;
        curr.next = new_node;

        if (new_node.next != null) {
            new_node.next.prev = new_node;
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
        head.next.next = new Node(4);
        head.next.next.prev = head.next;

        System.out.print("Original Linked List: ");
        printList(head);

        int data = 3;
        int pos = 3;
        head = insertAtPosition(head, pos, data);

        printList(head);
    }
}`;

    const [copySuccess, setCopySuccess] = useState(false);
    const [output, setOutput] = useState('');

    const generateOutput = () => {
        const originalList = "Original Linked List: \n1 2 4\n";
        const updatedList = "After inserting Node 3 at position 3: \n1 2 3 4\n";
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

export default InsertSpecific;
