import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NumberInput from "../components/NumberInput";

test('renders NumberInput with label and input', () => {
    render(<NumberInput label="Number" value="" onChange={() => {
    }} icon="number"/>);
    expect(screen.getByLabelText(/Number/i)).toBeInTheDocument();
});

test('calls onChange with valid number input', () => {
    const handleChange = jest.fn();
    render(<NumberInput label="Number" value="" onChange={handleChange} icon="number"/>);
    const input = screen.getByLabelText(/Number/i);
    fireEvent.change(input, {target: {value: '17'}});
    expect(handleChange).toHaveBeenCalledWith('17');
});

test('does not call onChange with invalid input', () => {
    const handleChange = jest.fn();
    render(<NumberInput label="Number" value="" onChange={handleChange} icon="number"/>);
    const input = screen.getByLabelText(/Number/i);
    fireEvent.change(input, {target: {value: 'ab8o'}});
    expect(handleChange).not.toHaveBeenCalled();
});