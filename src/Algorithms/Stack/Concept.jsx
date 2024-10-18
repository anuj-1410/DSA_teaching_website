import React from 'react';
import stackimg from './stackimg.png';

const Concept = () => {
  return (
    <div style={{fontSize:"1.3rem", margin:"0 50px"}}>
      <h1>Understanding Stack Data Structure in C (Using Array)</h1>
      
      <h2>What is a Stack?</h2>
      <p>
        A Stack is a linear data structure that follows the Last In, First Out (LIFO) principle. The last element added to the stack is the first one to be removed. Stacks are commonly used in scenarios such as function call management, expression evaluation, and backtracking algorithms.
      </p>
      
      <h2>Basic Operations</h2>
      <p>The primary operations of a stack include:</p>
      <ul>
        <li><strong>Push:</strong> Adds an element to the top of the stack.</li>
        <li><strong>Pop:</strong> Removes the top element from the stack.</li>
        <li><strong>Peek:</strong> Returns the top element without removing it.</li>
        <li><strong>IsEmpty:</strong> Checks if the stack is empty.</li>
        <li><strong>Size:</strong> Returns the number of elements in the stack.</li>
      </ul>

      <img src={stackimg} alt="None" />


      <h2>Stack Implementation in C (Using Array)</h2>
      <p>Below is a simple implementation of a stack using an array in C:</p>
      
      <pre>
        {`#include <stdio.h>
#include <stdlib.h>

#define MAX 100 // Maximum size of the stack

// Define the stack structure
struct Stack {
    int top;
    int items[MAX];
};

// Function to create a new stack
struct Stack* createStack() {
    struct Stack* stack = (struct Stack*)malloc(sizeof(struct Stack));
    stack->top = -1; // Initialize top of stack
    return stack;
}

// Function to check if the stack is empty
int isEmpty(struct Stack* stack) {
    return stack->top == -1;
}

// Function to check if the stack is full
int isFull(struct Stack* stack) {
    return stack->top == MAX - 1;
}

// Function to add an element to the stack
void push(struct Stack* stack, int data) {
    if (isFull(stack)) {
        printf("Stack overflow\\n");
        return;
    }
    stack->items[++stack->top] = data; // Increment top and add item
    printf("%d pushed to stack\\n", data);
}

// Function to remove the top element from the stack
int pop(struct Stack* stack) {
    if (isEmpty(stack)) {
        printf("Stack is empty\\n");
        return -1; // Return -1 if the stack is empty
    }
    return stack->items[stack->top--]; // Return top item and decrement top
}

// Function to get the top element of the stack
int peek(struct Stack* stack) {
    if (isEmpty(stack)) {
        printf("Stack is empty\\n");
        return -1; // Return -1 if the stack is empty
    }
    return stack->items[stack->top];
}

// Function to free the stack
void freeStack(struct Stack* stack) {
    free(stack); // Free the memory allocated for the stack
}

// Main function to demonstrate stack operations
int main() {
    struct Stack* stack = createStack();
    
    push(stack, 10);
    push(stack, 20);
    push(stack, 30);
    
    printf("Top element is %d\\n", peek(stack));
    printf("%d popped from stack\\n", pop(stack));
    printf("Top element is %d\\n", peek(stack));
    
    freeStack(stack);
    return 0;
}`}
      </pre>

      <h2>Function Explanations and Algorithms</h2>
      <ul>
        <li>
          <strong>createStack:</strong>
          <p>Initializes a new stack by allocating memory for the stack structure and setting the top index to -1.</p>
          <p><em>Algorithm:</em> 
            <br/>
            1. Allocate memory for a new Stack. 
            <br/>
            2. Set the top to -1 to indicate an empty stack. 
            <br/>
            3. Return the created stack.
          </p>
        </li>
        <li>
          <strong>isEmpty:</strong>
          <p>Checks whether the stack is empty by returning true if the top index is -1.</p>
          <p><em>Algorithm:</em> 
            <br/>
            1. Return true if top is -1; otherwise, return false.
          </p>
        </li>
        <li>
          <strong>isFull:</strong>
          <p>Checks whether the stack is full by returning true if the top index is equal to MAX - 1.</p>
          <p><em>Algorithm:</em> 
            <br/>
            1. Return true if top is equal to MAX - 1; otherwise, return false.
          </p>
        </li>
        <li>
          <strong>push:</strong>
          <p>Adds a new item to the stack. If the stack is full, it prints a message; otherwise, it increments the top index and adds the item.</p>
          <p><em>Algorithm:</em> 
            <br/>
            1. If the stack is full, print "Stack overflow". 
            <br/>
            2. Increment top and add the new item at stack[top].
          </p>
        </li>
        <li>
          <strong>pop:</strong>
          <p>Removes and returns the top element from the stack. If the stack is empty, it prints a message and returns -1.</p>
          <p><em>Algorithm:</em> 
            <br/>
            1. If the stack is empty, print "Stack is empty" and return -1. 
            <br/>
            2. Return the item at stack[top] and decrement top.
          </p>
        </li>
        <li>
          <strong>peek:</strong>
          <p>Returns the top element without removing it. If the stack is empty, it prints a message and returns -1.</p>
          <p><em>Algorithm:</em> 
            <br/>
            1. If the stack is empty, print "Stack is empty" and return -1. 
            <br/>
            2. Return the item at stack[top].
          </p>
        </li>
        <li>
          <strong>freeStack:</strong>
          <p>Frees the memory allocated for the stack structure.</p>
          <p><em>Algorithm:</em> 
            <br/>
            1. Free the allocated memory for the stack.
          </p>
        </li>
      </ul>
      
    </div>
  );
};

export default Concept;
