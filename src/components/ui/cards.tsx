import React from 'react';
import './Card.css'; // Assuming you have some styles

interface CardProps {
    title: string;
    content: string;
    imageUrl?: string; // Optional image
}

const Card: React.FC<CardProps> = ({ title, content, imageUrl }) => {
    return (
        <div className="card">
            {imageUrl && <img src={imageUrl} alt={title} className="card-image" />}
            <h2 className="card-title">{title}</h2>
            <p className="card-content">{content}</p>
        </div>
    );
};

export default Card;
