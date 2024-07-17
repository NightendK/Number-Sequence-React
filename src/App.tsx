// src/App.tsx
import React, { useState } from 'react';
import NumberInput from "./components/NumberInput";
import NumberSequence from './components/NumberSequence';
import Triangle from "./components/Triangle";
import './App.css';

const App: React.FC = () => {
    const [inputNumber, setInputNumber] = useState<number | string>('');
    const [height, setHeight] = useState<number | string>('');
    const [width, setWidth] = useState<number | string>('');

    const handleInputNumberChange = (value: number | string) => {
        setInputNumber(value);
    };

    const handleHeightChange = (value: number | string) => {
        setHeight(value);
    };

    const handleWidthChange = (value: number | string) => {
        setWidth(value);
    };

    const parsedInputNumber = parseInt(inputNumber as string, 10);
    const parsedHeight = parseFloat(height as string);
    const parsedWidth = parseFloat(width as string);

    return (
        <div className="App">
            <h1>Sequence and Triangle Area Generator</h1>
            <NumberInput label="Number" value={inputNumber} onChange={handleInputNumberChange} icon="number" />
            <NumberSequence number={isNaN(parsedInputNumber) ? 0 : parsedInputNumber} />
            <NumberInput label="Height" value={height} onChange={handleHeightChange} icon="height" />
            <NumberInput label="Width" value={width} onChange={handleWidthChange} icon="width" />
            <Triangle height={isNaN(parsedHeight) ? 0 : parsedHeight} width={isNaN(parsedWidth) ? 0 : parsedWidth} />
        </div>
    );
};

export default App;
