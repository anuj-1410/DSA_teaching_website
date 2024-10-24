import React, { useState } from "react";
import "./DoubleHashing.css"; 

const DoubleHashing = () => {
  const tableSize = 10; 
  const [table, setTable] = useState(Array(tableSize).fill(null)); 
  const [currentKey, setCurrentKey] = useState(null); 
  const [currentIndex, setCurrentIndex] = useState(null); 
  const [stepSize, setStepSize] = useState(null);
  const [hashStep, setHashStep] = useState(null); 
  const [collision, setCollision] = useState(false); 

  
  const hash1 = (key) => key % tableSize;

 
  const hash2 = (key) => 1 + (key % (tableSize - 1));

 
  const insertKey = (key) => {
    let index = hash1(key);
    let step = hash2(key);
    setCurrentKey(key);
    setHashStep("Calculating hash1...");
    setCollision(false);

    setTimeout(() => {
      setHashStep(`hash1(${key}) = ${index}`);
      setCurrentIndex(index);

      setTimeout(() => {
        if (table[index] !== null) {
          setCollision(true);
          setHashStep(`Collision at index ${index}. Calculating hash2...`);

          setTimeout(() => {
            setStepSize(step);
            setHashStep(`hash2(${key}) = ${step}`);

            const animateInsertion = () => {
              let newTable = [...table];
              let probes = 0;

              const interval = setInterval(() => {
                if (newTable[index] === null) {
                  newTable[index] = key;
                  setTable(newTable);
                  setHashStep(`Key ${key} inserted at index ${index}`);
                  clearInterval(interval); 
                } else {
                  index = (index + step) % tableSize; 
                  setHashStep(`Collision. Probing to next index ${index}`);
                  setCurrentIndex(index);
                  probes++;
                  if (probes >= tableSize) {
                    setHashStep("Table is full, cannot insert!");
                    clearInterval(interval); 
                  }
                }
              }, 1000); 
            };

            animateInsertion();
          }, 1500);
        } else {
         
          setHashStep(`Key ${key} inserted at index ${index}`);
          let newTable = [...table];
          newTable[index] = key;
          setTable(newTable);
        }
      }, 1500);
    }, 1500);
  };

  return (
    <div className="hash-table-container">
      <h2>Double Hashing Visualization</h2>
      <input
        type="number"
        placeholder="Enter a key and press Enter"
        onKeyDown={(e) => {
          if (e.key === "Enter") insertKey(Number(e.target.value));
        }}
      />

      <div className="table">
        {table.map((val, idx) => (
          <div
            key={idx}
            className={`cell ${idx === currentIndex ? (collision ? "collision" : "active") : ""}`}
          >
            {val === null ? "-" : val}
          </div>
        ))}
      </div>

      {currentKey !== null && (
        <div className="info">
          <p>
            <strong>Current Key: </strong> {currentKey}
          </p>
          <p>
            <strong>Current Index: </strong> {currentIndex}
          </p>
          {stepSize && (
            <p>
              <strong>Step Size (hash2): </strong> {stepSize}
            </p>
          )}
          <p>
            <strong>Process: </strong> {hashStep}
          </p>
        </div>
      )}
    </div>
  );
};

export default DoubleHashing;
