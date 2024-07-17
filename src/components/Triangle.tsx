// src/TriangleArea.tsx
import React from 'react';

interface TriangleAreaInterface {
    height: number;
    width: number;
}


const Triangle: React.FC<TriangleAreaInterface> = ({height, width}) => {
    const area = (height * width) / 2;

    return (
        <div className="triangle-area">
            {height > 0 && width > 0 && (
                <>
                    <h2>Triangle Area:</h2>
                    <p>{`Area: ${area}`}</p>
                </>
            )}
        </div>
    );
};

export default Triangle;
