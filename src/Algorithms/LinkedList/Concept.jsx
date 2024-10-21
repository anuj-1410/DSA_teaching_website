import React from 'react';
import deletionImageSpecficposition from './Deletion-at-a-Specific-Position-in-Doubly-Linked-List.png';
import deletionatBeginning from './Deletion-at-the-Beginning-of-Doubly-Linked-List.png';
import deletionatend from './Deletion-at-the-End-in-Doubly-Linked-List.png';
import insertionatSpecificPosition from './Insertion-at-a-Specific-Position-in-Doubly-Linked-List.png';
import insertionatBeginning from './Insertion-at-the-Beginning-in-Doubly-Linked-List.png';
import insertionatend from './Insertion-at-the-End-in-Doubly-Linked-List.png';

const Concept = () => {
    return (
        <div style={{ fontSize: "1.3rem", margin: "0 50px" }}>
           <h2>Traversal in Doubly Linked List</h2>
           <p>To Traverse the doubly list, we can use the following steps:</p>
           <p>a. Forward Traversal:</p>
           <ul>
            <li>Initialize a pointer to the head of the linked list.</li>
            <li>While the pointer is not null:</li>
            <ul>
                <li>Visit the data at the current node.</li>
                <li>Move the pointer to the next node.</li>
            </ul>
           </ul>
           <p>b. Backward Traversal:</p>
           <ul>
            <li>Initialize a pointer to the tail of the linked list.</li>
            <li>While the pointer is not null:</li>
            <ul>
                <li>Visit the data at the current node.</li>
                <li>Move the pointer to the previous node.</li>
            </ul>
           </ul>
           <h2>Finding Length of Doubly Linked List</h2>
           <p>To find the length of doubly list, we can use the following steps:</p>
           <ul>
            <li>Start at the head of the list.</li>
            <li>Traverse through the list, counting each node visited.</li>
            <li>Return the total count of nodes as the length of the list.</li>
           </ul>
           <h2>Insertion at the Beginning in Doubly Linked List</h2>
           <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={insertionatBeginning} alt="Insertion at the end copy" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
           <p>To insert a new node at the beginning of the doubly list, we can use the following steps:</p>
           <ul>
            <li>Create a new node, say new_node with the given data and set its previous pointer to null, new_node->prev = NULL.</li>
            <li>Set the next pointer of new_node to current head, new_node->next = head.</li>
            <li>If the linked list is not empty, update the previous pointer of the current head to new_node, head->prev = new_node.</li>
            <li>Return new_node as the head of the updated linked list.</li>
           </ul>
           <h2>Insertion at the End of Doubly Linked List</h2>
           <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={insertionatend} alt="Insertion at the end copy" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
           <p>To insert a new node at the end of the doubly linked list, we can use the following steps:</p>
           <ul>
            <li>
            Allocate memory for a new node and assign the provided value to its data field.
            </li>
            <li>Initialize the next pointer of the new node to nullptr.
            </li>
            <li>If the list is empty:</li>
                <ul>
                    <li>Set the previous pointer of the new node to nullptr.</li>
                    <li>Update the head pointer to point to the new node.</li>
                </ul>
            <li>If the list is not empty:</li>
                <ul>
                    <li>Traverse the list starting from the head to reach the last node.</li>
                    <li>Set the next pointer of the last node to point to the new node.</li>
                    <li>Set the previous pointer of the new node to point to the last node.</li>
                </ul>
           </ul>
           <h2>Insertion at a Specific Position in Doubly Linked List</h2>
           <p>To insert a node at a specific Position in doubly linked list, we can use the following steps:</p>
           <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={insertionatSpecificPosition} alt="Insertion at the end copy" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            <ul>
                <li>If position = 1, create a new node and make it the head of the linked list and return it.</li>
                <li>Otherwise, traverse the list to reach the node at position – 1, say curr.</li>
                <li>If the position is valid, create a new node with given data, say new_node.</li>
                <li>Update the next pointer of new node to the next of current node and prev pointer of new node to current node, new_node->next = curr->next and new_node->prev = curr.</li>
                <li>Similarly, update next pointer of current node to the new node, curr->next = new_node.</li>
                <li>If the new node is not the last node, update prev pointer of new node’s next to the new node, new_node->next->prev = new_node.</li>
               
            </ul>
            <h2>Deletion at the Beginning of Doubly Linked List</h2>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={deletionatBeginning} alt="Insertion at the end copy" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            <p>To delete a node at the beginning in doubly linked list, we can use the following steps:</p>
            <ul>
                <li>Check if the list is empty, there is nothing to delete. Return.</li>
                <li>Store the head pointer in a variable, say temp.</li>
                <li>Update the head of linked list to the node next to the current head, head = head->next.</li>
                <li>If the new head is not NULL, update the previous pointer of new head to NULL, head->prev = NULL.</li>
            </ul>
            <h2>Deletion at the End of Doubly Linked List</h2>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={deletionatend} alt="Insertion at the end copy" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            <p>To delete a node at the end in doubly linked list, we can use the following steps:</p>
            <ul>
                <li>Check if the doubly linked list is empty. If it is empty, then there is nothing to delete.</li>
                <li>If the list is not empty, then move to the last node of the doubly linked list, say curr.</li>
                <li>Update the second-to-last node’s next pointer to NULL, curr->prev->next = NULL.</li>
                <li>Free the memory allocated for the node that was deleted.</li>
            </ul>
            <h2>Deletion at a Specific Position in Doubly Linked List</h2>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={deletionImageSpecficposition} alt="Insertion at the end copy" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            <p>To delete a node at a specific position in doubly linked list, we can use the following steps:</p>
            <ul>
                <li>Traverse to the node at the specified position, say curr.</li>
                <li>If the position is valid, adjust the pointers to skip the node to be deleted.</li>
                <ul>
                    <li>If curr is not the head of the linked list, update the next pointer of the node before curr to point to the node after curr, curr->prev->next = curr-next.</li>
                    <li>If curr is not the last node of the linked list, update the previous pointer of the node after curr to the node before curr, curr->next->prev = curr->prev.</li>

                </ul>
            <li>Free the memory allocated for the deleted node.</li>
            </ul>
            <h2>Advantages of Doubly Linked List</h2>
            <ul>
                <li>Efficient traversal in both directions: Doubly linked lists allow for efficient traversal of the list in both directions, making it suitable for applications where frequent insertions and deletions are required.</li>
                <li>Easy insertion and deletion of nodes: The presence of pointers to both the previous and next nodes makes it easy to insert or delete nodes from the list, without having to traverse the entire list.</li>
                <li>Can be used to implement a stack or queue: Doubly linked lists can be used to implement both stacks and queues, which are common data structures used in programming.</li>

            </ul>
            <h2>Disadvantages of Doubly Linked List</h2>
            <ul>
                <li>More complex than singly linked lists: Doubly linked lists are more complex than singly linked lists, as they require additional pointers for each node.</li>
                <li>More memory overhead: Doubly linked lists require more memory overhead than singly linked lists, as each node stores two pointers instead of one.</li>
            </ul>
            <h2>Applications of Doubly Linked List</h2>
            <ul>
                <li>Implementation of undo and redo functionality in text editors.</li>
                <li>Cache implementation where quick insertion and deletion of elements are required.</li>
                <li>Browser history management to navigate back and forth between visited pages.</li>
                <li>Music player applications to manage playlists and navigate through songs efficiently.</li>
                <li>Implementing data structures like Deque (double-ended queue) for efficient insertion and deletion at both ends.</li>
            </ul>
        </div>
       
        
    );
};

export default Concept;
