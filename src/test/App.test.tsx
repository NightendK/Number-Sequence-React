import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import Triangle from "../components/Triangle";

test('renders App component', () => {
    render(<App/>);
    expect(screen.getByText(/Sequence and Triangle Area Generator/i)).toBeInTheDocument();
});

test('renders number sequence based on user input', () => {
    render(<App/>);
    const input = screen.getByLabelText(/Number/i);
    fireEvent.change(input, {target: {value: '5'}});
    expect(screen.getByText(/1--->2--->3--->4--->5/i)).toBeInTheDocument();
});

test('calculates triangle area based on height and width input', () => {
    render(<App/>);
    render(<Triangle height={25} width={7}/>);
    expect(screen.getByText(/Area: 87.5/i)).toBeInTheDocument();
});
