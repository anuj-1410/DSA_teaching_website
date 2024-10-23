import React, { useEffect, useRef, useState } from 'react';
import './style.module.css'; // Import the CSS file

const Demo = () => {
    const canvasRef = useRef(null);
    const [numbers, setNumbers] = useState([]);
    const [value, setValue] = useState('');
    const [index, setIndex] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        drawLinkedList(ctx);
    }, [numbers]);

    const drawLinkedList = (ctx) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        numbers.forEach((num, i) => {
            ctx.fillStyle = 'blue';
            ctx.fillRect(20 + i * 50, 20, 40, 40);
            ctx.fillStyle = 'white';
            ctx.fillText(num, 30 + i * 50, 45);
        });
        
        ctx.fillStyle = 'black';
        ctx.font = 'bold 25px Arial';
        ctx.fillText("Null", 20 + numbers.length * 50, 47);
    };

    const insertAtHead = () => {
        if (numbers.length < 7) {
            setNumbers([value, ...numbers]);
            setValue('');
            setMessage("Inserted at head.");
        } else {
            setMessage("Only 7 nodes are allowed.");
        }
    };

    const insertAtTail = () => {
        if (numbers.length < 7) {
            setNumbers([...numbers, value]);
            setValue('');
            setMessage("Inserted at tail.");
        } else {
            setMessage("Only 7 nodes are allowed.");
        }
    };

    const insertAtNode = () => {
        const idx = parseInt(index);
        if (idx >= 0 && idx <= numbers.length && numbers.length < 7) {
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
        const idx = numbers.indexOf(value);
        if (idx !== -1) {
            setMessage(`Value found at index ${idx}.`);
        } else {
            setMessage("Value not found.");
        }
        setValue('');
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

    return (
        <div className="container">
            <canvas ref={canvasRef} width={600} height={100} />
            <div className="inputvalue">
                <div className="inputContainer">
                    <input
                        className="value"
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder="Value"
                    />
                    <input
                        className="index"
                        type="number"
                        value={index}
                        onChange={(e) => setIndex(e.target.value)}
                        placeholder="Index"
                    />
                </div>
            </div>
            <div>
                <button onClick={insertAtHead}>Insert At Head</button>
                <button onClick={insertAtTail}>Insert At Tail</button>
                <button onClick={insertAtNode}>Insert At Node</button>
                <button onClick={searchNumber}>Search</button>
                <button onClick={removeFromHead}>Remove From Head</button>
                <button onClick={removeFromTail}>Remove From Tail</button>
                <button onClick={removeAtNode}>Remove From Index</button>
            </div>
            <p style={{ color: 'black' }}>{message}</p>
        </div>
    );
};

export default Demo;
