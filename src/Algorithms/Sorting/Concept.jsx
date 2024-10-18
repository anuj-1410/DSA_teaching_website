import React from 'react';
import partitionExample from './partition-example.png';
import pivotSelection from './pivot-selection.png';

const Concept = () => {
    return (
        <div style={{fontSize:"1.3rem", margin:"0 50px"}}>
            
            <h2>How to Select Pivot?</h2>
            <p>QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions 
                the given array around the picked pivot.
            </p>
            <p>There are many different versions of Quick Sort that pick pivot in different ways :</p>
            <ul>
                <li>Always pick first element as pivot</li>
                <li>Always pick last element as pivot</li>
                <li>Pick a random element as pivot</li>
                <li>Pick median as pivot</li>
            </ul>
            <h2>Pictorial Representation of Pivot Selection</h2>
            <img src={partitionExample} alt="None" />

            <p>The key process in Quick Sort is partition. Targets of partitions is, given an array and an element
                 x of array as pivot, put x at its correct position in sorted array and put all smaller and equal
                  elements (smaller than or equal to x) before x, and put all greater elements (greater than x) after x.
            </p>
            <p>Partitioning array around the pivot means we divide the array into three parts</p>
            <ul>
                <li>Partition-1 : Contains all elements of that array less than or equal to pivot</li>
                <li>Partition-2 : Contains only pivot</li>
                <li>Partition-3 : Contains all elements of that array greater than pivot</li>
            </ul>

            <h2>Steps to Partition an Unsorted Array</h2>
            <ul>
                <li>STEP 1 : First select a pivot in an unsorted array as shown above in the pivot selection section</li>
                <li>STEP 2 : Initialize the low index and high index. Low index represents the first index of an array. High index represents the last index of an array.</li>
                <li>STEP 3 : Start comparing low index element and high index element with the pivot. First start
                     comparing with low index element with pivot element.
                    If low index element is less than the pivot element, increment low index otherwise start 
                    comparing high index element with pivot element.
                    If high index element is greater than pivot element, decrement high index otherwise stop.</li>
                <li>STEP 4 : Compare low index with high index.
                    If low index is less than high index swap low index element with the high index element.
                    If low index is greater than high index swap high index element with pivot index element.</li>
                <li>STEP 5 : Repeat the steps 1 to 4 recursively for the sub-arrays until we get a sorted array.</li>
            </ul>
            <h2>Pictorial Representation of Partitioning Unsorted Array</h2>
            <img src={pivotSelection} alt="None" />





        </div>
    );
};

export default Concept;