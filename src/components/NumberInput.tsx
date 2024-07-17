import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTerminal, faPencil} from '@fortawesome/free-solid-svg-icons';

interface NumberInputInterface {
    label: string;
    value: number | string;
    onChange: (value: number | string) => void;
    icon?: 'number' | 'height' | 'width';
}


const icons = {
    number: faTerminal,
    height: faPencil,
    width: faPencil,
};
const NumberInput: React.FC<NumberInputInterface> = ({label, value, onChange, icon}) => {
    /**
     * By using regular expression, the user is not allowed to enter letters or any other characters apart from
     * numbers in the input box.
     * @param e
     */
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        if (/^\d*\.?\d*$/.test(inputValue)) {
            onChange(inputValue);
        }
    };

    return (
        <div className="input-group">
            <label htmlFor="numberInput">{icon && <FontAwesomeIcon icon={icons[icon]} />} {label}:</label>
            <input id="numberInput" type="text" value={value} onChange={handleChange} placeholder="Enter number value"/>
        </div>
    );
};

export default NumberInput;
