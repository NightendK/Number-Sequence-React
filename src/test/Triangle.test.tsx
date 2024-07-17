import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Triangle from "../components/Triangle";

test('renders the correct triangle area', () => {
    render(<Triangle height={8} width={7}/>);
    expect(screen.getByText(/Area: 28/i)).toBeInTheDocument();
});

test('does not display triangle area if height is zero', () => {
    render(<Triangle height={0} width={5}/>);
    expect(screen.queryByText(/Triangle Area/i)).not.toBeInTheDocument();

});

test('does not display triangle area if width is zero', () => {
    render(<Triangle height={17} width={0}/>);
    expect(screen.queryByText(/Triangle Area/i)).not.toBeInTheDocument();
});