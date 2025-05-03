'use client'; // Menandakan ini adalah client component

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-md px-6 py-4 flex justify-between items-center">
      <div className="text-lg font-bold text-purple-700 dark:text-pink-300">My CV</div>
      <div className="hidden md:flex space-x-4">
        <Link href="/" className="px-3 py-2 rounded-md font-medium text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800">Home</Link>
        <Link href="/About" className="px-3 py-2 rounded-md font-medium text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800">About</Link>
        <Link href="/Skills" className="px-3 py-2 rounded-md font-medium text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800">Skills</Link>
        <Link href="/Portfolio" className="px-3 py-2 rounded-md font-medium text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800">Portfolio</Link>
        <Link href="/Contact" className="px-3 py-2 rounded-md font-medium text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800">Contact</Link>
      </div>

      {/* Menu Mobile */}
      <button
        className="md:hidden text-gray-700 dark:text-gray-300"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="material-icons">menu</span>
      </button>

      {/* Menu Dropdown (Mobile) */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-lg py-4">
          <Link href="/" className="block px-6 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800">Home</Link>
          <Link href="/About" className="block px-6 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800">About</Link>
          <Link href="/Skills" className="block px-6 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800">Skills</Link>
          <Link href="/Portfolio" className="block px-6 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800">Portfolio</Link>
          <Link href="/Contact" className="block px-6 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800">Contact</Link>
        </div>
      )}
    </nav>
  );
}
