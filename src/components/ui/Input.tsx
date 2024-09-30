import React from 'react';

interface InputProps {
    id: string; // Add this line
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string; // Ensure this is included
    type?: string;
}

const Input: React.FC<InputProps> = ({ value, onChange, placeholder = '', type = 'text' }) => {
    return (
        <input 
            type={type} 
            value={value} 
            onChange={onChange} 
            placeholder={placeholder} 
            className="input"
        />
    );
};

export default Input;

