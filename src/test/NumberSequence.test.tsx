import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NumberSequence from "../components/NumberSequence";

test('renders sequence up to the given number', () => {
    render(<NumberSequence number={7}/>);
    expect(screen.getByText(/1--->2--->3--->4--->5--->6--->7/i)).toBeInTheDocument();
});

test('does not render sequence if number is zero', () => {
    render(<NumberSequence number={0}/>);
    expect(screen.queryByText(/Sequence/i)).not.toBeInTheDocument();
});