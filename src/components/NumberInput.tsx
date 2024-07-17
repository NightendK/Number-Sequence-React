import React from 'react';

interface NumberInputInterface {
    label: string;
    value: number | string;
    onChange: (value: number | string) => void;
}

const NumberInput: React.FC<NumberInputInterface> = ({ label, value, onChange }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        if (/^\d*\.?\d*$/.test(inputValue)) {
            onChange(inputValue);
        }
    };

    return (
        <div className="input-group">
            <label>{label}: </label>
            <input type="text" value={value} onChange={handleChange} placeholder="Enter number value" />
        </div>
    );
};

export default NumberInput;
