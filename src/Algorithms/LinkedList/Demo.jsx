import React, { useEffect, useRef, useState, useCallback } from 'react';
import styles from './style.module.css';

const Demo = () => {
    const canvasRef = useRef(null);
    const [numbers, setNumbers] = useState([]);
    const [value, setValue] = useState('');
    const [index, setIndex] = useState('');
    const [message, setMessage] = useState('');
    const [searchIndex, setSearchIndex] = useState(null);
    const [checkingIndex, setCheckingIndex] = useState(null);

    const drawLinkedList = useCallback((ctx) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        const spacing = 80;
        const nodeRadius = 20;

        numbers.forEach((num, i) => {
            const centerX = spacing / 2 + i * spacing;
            const centerY = 40;

            ctx.fillStyle = (i === 0) ? 'orange' : (searchIndex === i) ? 'green' : (checkingIndex === i) ? '#1B4965' : '#62B6CB';
            ctx.beginPath();
            ctx.arc(centerX, centerY, nodeRadius, 0, Math.PI * 2);
            ctx.fill();
            
            ctx.fillStyle = 'white';
            ctx.font = 'bold 15px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(num, centerX, centerY);

            ctx.fillStyle = 'black';
            ctx.font = 'bold 12px Arial';
            ctx.fillText(i, centerX, centerY - 25);

            if (i < numbers.length - 1) {
                const startX = centerX + nodeRadius;
                const endX = centerX + spacing - nodeRadius;
                ctx.beginPath();
                ctx.moveTo(startX, centerY - 5); 
                ctx.lineTo(endX, centerY - 5);
                ctx.strokeStyle = 'black';
                ctx.lineWidth = 2;
                ctx.stroke();

                const headlen = 10;
                const angle = Math.atan2(centerY - centerY, endX - startX);
                ctx.beginPath();
                ctx.moveTo(endX, centerY - 5); 
                ctx.lineTo(endX - headlen * Math.cos(angle - Math.PI / 6), centerY - 5 - headlen * Math.sin(angle - Math.PI / 6));
                ctx.lineTo(endX - headlen * Math.cos(angle + Math.PI / 6), centerY - 5 - headlen * Math.sin(angle + Math.PI / 6));
                ctx.fillStyle = 'black';
                ctx.fill();
            }

            if (i > 0) {
                const startX = centerX - nodeRadius;
                const endX = centerX - spacing + nodeRadius;
                const startY = centerY + 10; 
                ctx.beginPath();
                ctx.moveTo(startX, startY);
                ctx.lineTo(endX, startY);
                ctx.strokeStyle = 'black';
                ctx.lineWidth = 2;
                ctx.stroke();

                const headlen = 10;
                const angle = Math.atan2(startY - startY, startX - endX);
                ctx.beginPath();
                ctx.moveTo(endX, startY);
                ctx.lineTo(endX + headlen * Math.cos(angle - Math.PI / 6), startY + headlen * Math.sin(angle - Math.PI / 6));
                ctx.lineTo(endX + headlen * Math.cos(angle + Math.PI / 6), startY + headlen * Math.sin(angle + Math.PI / 6));
                ctx.fillStyle = 'black';
                ctx.fill();
            }
        });

        ctx.fillStyle = 'black';
        ctx.font = 'bold 25px Arial';
        ctx.fillText("Null", spacing / 2 + numbers.length * spacing, 45);
        
        if (numbers.length > 0) {
            ctx.fillStyle = 'black';
            ctx.font = 'bold 15px Arial';
            ctx.fillText("Head", spacing / 2, 40 + 30); 
        }
    }, [numbers, searchIndex, checkingIndex]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        drawLinkedList(ctx);
    }, [numbers, drawLinkedList, searchIndex, checkingIndex]);

    const insertAtHead = () => {
        if (numbers.length < 6) {  
            setNumbers([value, ...numbers]);
            setValue('');
            setMessage("Inserted at head.");
        } else {
            setMessage("Only 6 nodes are allowed.");
        }
    };

    const insertAtTail = () => {
        if (numbers.length < 6) { 
            setNumbers([...numbers, value]);
            setValue('');
            setMessage("Inserted at tail.");
        } else {
            setMessage("Only 6 nodes are allowed.");
        }
    };

    const insertAtNode = () => {
        const idx = parseInt(index);
        if (idx >= 0 && idx <= numbers.length && numbers.length < 6) { 
            const newNumbers = [...numbers];
            newNumbers.splice(idx, 0, value);
            setNumbers(newNumbers);
            setValue('');
            setIndex('');
            setMessage(`Inserted at index ${idx}.`);
        } else {
            setMessage("Invalid index or too many nodes.");
        }
    };

    const searchNumber = () => {
        setSearchIndex(null); 
        setCheckingIndex(0); 
        setMessage("Searching...");

        const search = (index) => {
            if (index < numbers.length) {
                setCheckingIndex(index); 

                if (numbers[index] === value) {
                    setSearchIndex(index);
                    setMessage(`Value found at index ${index}.`);
                    return;
                }

                setTimeout(() => search(index + 1), 500);
            } else {
                setCheckingIndex(null); 
                setMessage("Value not found.");
            }
        };

        search(0); 
    };

    const removeFromHead = () => {
        if (numbers.length > 0) {
            const newNumbers = numbers.slice(1);
            setNumbers(newNumbers);
            setMessage("Removed from head.");
        } else {
            setMessage("No nodes to remove.");
        }
    };

    const removeFromTail = () => {
        if (numbers.length > 0) {
            const newNumbers = numbers.slice(0, -1);
            setNumbers(newNumbers);
            setMessage("Removed from tail.");
        } else {
            setMessage("No nodes to remove.");
        }
    };

    const removeAtNode = () => {
        const idx = parseInt(index);
        if (idx >= 0 && idx < numbers.length) {
            const newNumbers = numbers.filter((_, i) => i !== idx);
            setNumbers(newNumbers);
            setValue('');
            setIndex('');
            setMessage(`Removed from index ${idx}.`);
        } else {
            setMessage("Invalid index.");
        }
    };

    const resetList = () => {
        setNumbers([]);
        setValue('');
        setIndex('');
        setMessage("List has been reset.");
    };

    return (
        <div className={styles.container}>
            <canvas ref={canvasRef} width={600} height={100} />
            <div className={styles.inputvalue}>
                <div className={styles.inputContainer}>
                    <input
                        className={styles.valueList}
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder="Value"
                    />
                    <input
                        className={styles.indexList}
                        type="number"
                        value={index}
                        onChange={(e) => setIndex(e.target.value)}
                        placeholder="Index"
                    />
                </div>
            </div>
            <div>
                <button className={styles.buttonList} onClick={insertAtHead}>Insert At Head</button>
                <button className={styles.buttonList} onClick={insertAtTail}>Insert At Tail</button>
                <button className={styles.buttonList} onClick={insertAtNode}>Insert At Node</button>
                <button className={styles.buttonList} onClick={searchNumber}>Search</button>
                <button className={styles.buttonList} onClick={removeFromHead}>Remove From Head</button>
                <button className={styles.buttonList} onClick={removeFromTail}>Remove From Tail</button>
                <button className={styles.buttonList} onClick={removeAtNode}>Remove From Index</button>
                <button className={styles.buttonList} onClick={resetList}>Reset</button>
            </div>
            <p className={styles.paraList}>{message}</p>
        </div>
    );
};

export default Demo;
