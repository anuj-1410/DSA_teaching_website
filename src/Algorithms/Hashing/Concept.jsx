import React from 'react';
import hashTableCollision from './hashTableCollision.png';
import doubleHashingExample from './doubleHashingExample.png';

const Concept = () => {
    return (
        <div style={{fontSize:"1.3rem", margin:"0 50px"}}>
            
            <h2>What is Double Hashing?</h2>
            <p>Double hashing is a technique used in open addressing hash tables to resolve collisions. 
                It applies a second hash function when a collision occurs to calculate a new index, preventing clustering.
            </p>

            <p>When a collision occurs in a hash table, double hashing uses two hash functions:</p>
            <ul>
                <li>The primary hash function determines the initial index.</li>
                <li>The secondary hash function determines the step size for probing.</li>
            </ul>

            <h2>How Does Double Hashing Work?</h2>
            <p>When inserting an element, the following steps are followed:</p>
            <ul>
                <li>Use the first hash function to find an index.</li>
                <li>If a collision occurs (i.e., the index is already occupied), apply the second hash function to calculate a step size.</li>
                <li>Move to the next available index by adding the step size to the current index, continuing this process until an empty spot is found.</li>
            </ul>

            <h2>Pictorial Representation of Collision and Double Hashing</h2>
            <img src={hashTableCollision} alt="None" />
            
            <p>Double hashing ensures that elements are distributed more uniformly in the hash table, minimizing the clustering effect that can occur with simpler probing techniques (such as linear or quadratic probing).</p>

            <h2>Hash Functions in Double Hashing</h2>
            <p>In double hashing, we typically use two functions:</p>
            <ul>
                <li><b>Primary hash function (h1):</b> This function is used to calculate the initial index where the element should be placed.</li>
                <li><b>Secondary hash function (h2):</b> This function is used to calculate the step size for probing in case of a collision. It ensures that the sequence of probing doesn't fall into a repetitive loop.</li>
            </ul>

            <h2>Example of Double Hashing</h2>
            <ul>
                <li>Let h1(key) = key % table_size</li>
                <li>Let h2(key) = 1 + (key % (table_size - 1))</li>
                <li>If a collision occurs at index `i`, the new index will be `i + h2(key)`.</li>
            </ul>

            <h2>Pictorial Representation of Double Hashing Process</h2>
            <img src={doubleHashingExample} alt="None" />

        </div>
    );
};

export default Concept;
