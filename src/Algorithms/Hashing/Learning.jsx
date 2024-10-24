import React from 'react';
import ReactPlayer from 'react-player';

const Learning = () => {
    const videoUrl = "https://youtu.be/HcWxaVl1TII?si=pwC7ziByDId6iTEo"; 

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
            <h2>What is Double Hashing?</h2>
            <p>Double Hashing is a method used to resolve collisions in hash tables. A hash table is a data structure that stores key-value pairs, and a collision occurs when two keys hash to the same index. Double hashing solves this by using two different hash functions.</p>
            <p>When a collision occurs, double hashing uses a second hash function to determine the next position to check in the hash table. This ensures that the probe sequence is not linear or quadratic, and thus avoids clustering, which improves performance over time.</p>

            <h2>How Does Double Hashing Work?</h2>
            <p>The two main functions used in double hashing are:</p>
            <ul>
                <li><b>Primary Hash Function (h1):</b> This function determines the initial index in the hash table.</li>
                <li><b>Secondary Hash Function (h2):</b> This function calculates the step size to find the next possible empty spot if a collision occurs at the initial index.</li>
            </ul>
            <p>In case of a collision, the new index is calculated as: <b>(h1(key) + i * h2(key)) % table_size</b>, where `i` is the number of attempts to find an empty slot.</p>

            <h2>Steps to Insert an Element in Hash Table Using Double Hashing</h2>
            <ol>
                <li><b>Step 1:</b> Compute the index using the primary hash function: <b>index = h1(key)</b>.</li>
                <li><b>Step 2:</b> If the computed index is empty, insert the key at that index.</li>
                <li><b>Step 3:</b> If the index is already occupied (collision), compute the step size using the secondary hash function: <b>step = h2(key)</b>.</li>
                <li><b>Step 4:</b> Move to the next possible index by adding the step size to the current index: <b>index = (index + step) % table_size</b>.</li>
                <li><b>Step 5:</b> Repeat steps 3 and 4 until an empty slot is found, then insert the key.</li>
            </ol>

            <h2>Advantages of Double Hashing</h2>
            <ul>
                <li>Avoids clustering of keys, unlike linear or quadratic probing.</li>
                <li>Provides a more uniform distribution of keys in the hash table.</li>
                <li>Efficient even when the hash table is nearly full, minimizing the number of probes needed.</li>
            </ul>
        </div>
    );
};

export default Learning;
