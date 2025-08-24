import { useState } from 'react';
import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Navigation Links for Desktop */}
          <nav className="hidden md:flex flex-1 justify-center space-x-6">
            <Link href="/" className="text-gray-800 hover:text-gray-600 whitespace-nowrap">Home</Link>
            <Link href="/courses" className="text-gray-800 hover:text-gray-600 whitespace-nowrap">Courses</Link>
            <Link href="/group-courses" className="text-gray-800 hover:text-gray-600 whitespace-nowrap">Group Courses</Link>
            <Link href="/test" className="text-gray-800 hover:text-gray-600 whitespace-nowrap">Test Your Level</Link>
            <Link href="/testimonials" className="text-gray-800 hover:text-gray-600 whitespace-nowrap">Testimonials</Link>
            <Link href="/blog" className="text-gray-800 hover:text-gray-600 whitespace-nowrap">Blog</Link> 
            <Link href="/privacy" className="text-gray-800 hover:text-gray-600 whitespace-nowrap">Privacy Policy</Link>
          </nav>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3 md:mr-12">
            <li>
              <Link
                href="https://dashboard.learn-dutch-online.com/"
                className="btn-sm bg-white text-gray-800 shadow-sm hover:bg-gray-50"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="btn-sm bg-gray-800 text-gray-200 shadow-sm hover:bg-gray-900"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Hamburger Menu (Mobile) */}
          <div className="flex md:hidden ml-auto">
            <button className="text-gray-800 focus:outline-none" onClick={toggleMenu}>
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:hidden absolute top-14 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-6xl rounded-2xl bg-white px-4 shadow-lg z-20 border border-gray-200`}
      >
        <nav className="flex flex-col items-center py-4 space-y-4">
          <Link href="/" className="text-gray-800 hover:text-gray-600">Home</Link>
          <Link href="/courses" className="text-gray-800 hover:text-gray-600">Courses</Link>
          <Link href="/group-courses" className="text-gray-800 hover:text-gray-600">Group Courses</Link>
          <Link href="/test" className="text-gray-800 hover:text-gray-600">Test Your Level</Link>
          <Link href="/testimonials" className="text-gray-800 hover:text-gray-600">Testimonials</Link>
          <Link href="/blog" className="text-gray-800 hover:text-gray-600">Blog</Link>
        </nav>
      </div>
    </header>
  );
}
