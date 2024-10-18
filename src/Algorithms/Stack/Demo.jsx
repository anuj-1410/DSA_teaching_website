import React, { useState } from 'react';
import './StackVisualizer.css'; 

const Demo = () => {
    const [stack, setStack] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [message, setMessage] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);

    const MAX_STACK_SIZE = 5;

    const pushItem = () => {
        if (!inputValue) {
            setMessage('Please Enter a value.');
            return showError();
        }
        if (stack.length === MAX_STACK_SIZE) {
            setMessage('Stack Overflow');
            return showError();
        }

        const newStack = [...stack, inputValue];
        setStack(newStack);
        setMessage(`Item ${inputValue} is Pushed.`);
        setInputValue('');
        setTimeout(() => setMessage(''), 1500);
        setIsDisabled(true);
        setTimeout(() => setIsDisabled(false), 1500);
    };

    const popItem = () => {
        if (stack.length === 0) {
            setMessage('Stack Underflow');
            return showError();
        }

        const poppedItem = stack[stack.length - 1];
        const newStack = stack.slice(0, -1);
        setStack(newStack);
        setMessage(`Item ${poppedItem} is Popped.`);
        setTimeout(() => setMessage(''), 1500);
        setIsDisabled(true);
        setTimeout(() => setIsDisabled(false), 1500);
    };

    const resetStack = () => {
        setStack([]);
        setMessage('');
        setInputValue('');
    };

    const showError = () => {
        setTimeout(() => setMessage(''), 1200);
    };

    return (
        <div className="containerstack">
            <header className='headerstack'>
                
                <h3 className="title">Stack Visualizer</h3>
            </header>

            <div className="container-header">
                <input
                    type="number"
                    className="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    required
                    disabled={isDisabled}
                />
                <button className="push" onClick={pushItem} disabled={isDisabled}>Push</button>
                <button className="pop" onClick={popItem} disabled={isDisabled}>Pop</button>
                <button className="reset" onClick={resetStack}>Reset</button>
            </div>

            <div className="container-body">
                <div className="stack">
                    <div className="main-stack-bucket">
                        {stack.map((item, index) => (
                            <div key={index} className={`ele ${item === stack[stack.length - 1] ? 'ele-add' : ''}`}>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="info">
                    <div className="sec1">
                        <h3>Top of the Stack:-</h3>
                        <button className="boxstack">{stack.length ? stack[stack.length - 1] : ''}</button>
                    </div>
                    <div className="sec2">
                        <h3>Last Pushed Item:-</h3>
                        <button className="boxstack">{inputValue}</button>
                    </div>
                    <div className="sec3">
                        <h3>Last Popped Item:-</h3>
                        <button className="boxstack">{stack.length ? stack[stack.length - 1] : ''}</button>
                    </div>
                    <div className="sec3">
                        <h3>Size of the Stack:-</h3>
                        <button className="boxstack">{stack.length}</button>
                    </div>

                    <div className="massage-boxstack">
                        <h2>Message boxstack</h2>
                        <div className={`massage ${message.includes('Error') ? 'error-massage' : ''}`}>{message}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Demo;