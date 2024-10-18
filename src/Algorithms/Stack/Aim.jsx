import React from 'react';

const Aim = () => {
  const styles = {
    container: {
      padding: '20px',
      maxWidth: '800px',
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif',
      lineHeight: '1.6',
      color: '#333',
    },
    heading: {
      textAlign: 'center',
      color: '#2c3e50',
    },
    subheading: {
      marginTop: '20px',
      color: '#2980b9',
    },
    objectiveList: {
      listStyleType: 'circle',
      marginLeft: '20px',
    },
    objectiveItem: {
      marginBottom: '10px',
    },
    
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Aim and Objectives</h1>
      
      <h2 style={styles.subheading}>Aim</h2>
      <p>
        The primary aim is to provide a comprehensive understanding of the Stack data structure, its operations, and its applications in computer science. We strive to equip learners with both theoretical knowledge and practical skills, enabling them to effectively implement stack algorithms in real-world scenarios.
      </p>
      
      <h2 style={styles.subheading}>Objectives</h2>
      <ul style={styles.objectiveList}>
        <li style={styles.objectiveItem}>To introduce the fundamental concepts of the Stack data structure, including its definition and properties.</li>
        <li style={styles.objectiveItem}>To explain the Last In, First Out (LIFO) principle that governs stack behavior.</li>
        <li style={styles.objectiveItem}>To describe and demonstrate the core operations of stacks, including Push, Pop, Peek, and IsEmpty.</li>
        <li style={styles.objectiveItem}>To teach various methods of implementing stacks, such as using arrays and linked lists.</li>
        <li style={styles.objectiveItem}>To analyze the time and space complexity of stack operations.</li>
        <li style={styles.objectiveItem}>To explore common applications of stacks in various domains, such as expression evaluation, backtracking algorithms, and memory management.</li>
      </ul>
      
      
    </div>
  );
};

export default Aim;
