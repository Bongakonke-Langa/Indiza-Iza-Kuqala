// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer>
            <p>© {new Date().getFullYear()} Your Website Name. All rights reserved.</p>
            <nav>
                <ul>
                    <li><a href="/privacy">Privacy Policy</a></li>
                    <li><a href="/terms">Terms of Service</a></li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;