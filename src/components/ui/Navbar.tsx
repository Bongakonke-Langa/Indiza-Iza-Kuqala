import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-sky-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl">Indiza Iza Kuqala</h1>
        <div>
          <Link to="/" className="text-white px-4">Home</Link>
          <Link to="/about" className="text-white px-4">About</Link>
          <Link to="/contact" className="text-white px-4">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
