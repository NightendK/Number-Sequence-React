import React from 'react';

interface NumberSequenceInterface {
    number: number;
}

/**
 *
 * @param number = represents the input received from the user. Based on this number,
 * the application will generate the appropriate sequence,
 */
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