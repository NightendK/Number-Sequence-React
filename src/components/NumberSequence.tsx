import React from 'react';

interface NumberSequenceInterface {
    number: number;
}

const NumberSequence: React.FC<NumberSequenceInterface> = ({ number }) => {
    const sequence = Array.from({ length: number }, (_, i) => i + 1);

    return (
        <div className="sequence">
            {number > 0 && (
                <>
                    <h2>Sequence:</h2>
                    <p>{sequence.join('--->')}</p>
                </>
            )}
        </div>
    );
};

export default NumberSequence;