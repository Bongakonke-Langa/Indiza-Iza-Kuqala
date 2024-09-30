import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            <header>
                <h1>Website Header</h1>
                {/* Add navigation links here */}
            </header>
            <main>
                {children}
            </main>
            <footer>
                <p>Website Footer</p>
            </footer>
        </div>
    );
};

export default Layout;
