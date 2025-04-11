import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <nav className='bg-blur bg-black/80 text-white p-4 sticky w-full top-0 shadow-md z-50'>
            <div className='container mx-auto flex justify-between items-center'>
                <Link to='/' className='text-2xl font-bold'>Devendra Singh</Link>
                <button className='md:hidden text-2xl' onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
                <ul className={`md:flex md:items-center md:space-x-10 absolute md:static bg-blur bg-black/80 h-screen sm:h-0 md:bg-transparent top-16 left-0 w-full md:w-auto p-6 md:p-0 transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
                    {[
                        { path: '/', name: "Home" },
                        { path: '/about', name: "About" },
                        { path: '/experience', name: "Experience" },
                        { path: '/contact', name: "Contact" },
                    ].map(({ path, name }, i) => (
                        <li key={i} className='py-2 md:py-0 text-center md:text-left'>
                            <Link to={path} className='hover:text-purple-400 duration-300 block' onClick={handleLinkClick}>{name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
