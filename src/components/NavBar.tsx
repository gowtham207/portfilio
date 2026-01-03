import React, { memo, useState } from 'react'
import type { navBarHyperLinkType } from '../types/navBarType'
import NavBarHyperLink from './NavBarHyperLink'
import { Menu, X } from 'lucide-react' // optional but clean icons
import { MdOutlineTerminal } from 'react-icons/md';
import { Link } from 'react-router';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const headerHyperLink: navBarHyperLinkType[] = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Experience', href: '/experience' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="w-full border-b border-slate-200 dark:border-card-border bg-white dark:bg-[#111218] sticky top-0 z-50">
      <div className="px-4 md:px-10 py-3 flex items-center justify-between mx-auto max-w-7xl">

        {/* Logo */}
        <Link to="/" className='flex flex-row items-center gap-2'>
          <MdOutlineTerminal className='text-primary' size={25} />
          <h1 className="text-lg font-bold flex-row items-center text-slate-900 dark:text-white">
            Gowtham.dev
          </h1>

        </Link>


        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-9">
          {headerHyperLink.map((value, index) => (
            <NavBarHyperLink
              key={index}
              name={value.name}
              href={value.href}
            />
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <button className="hidden cursor-pointer md:flex h-10 px-6 items-center rounded-lg bg-primary hover:bg-blue-700 transition-colors text-white text-sm font-bold">
            Hire Me
          </button>

          {/* Hamburger (Mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-900 dark:text-white"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-[#111218] border-t border-slate-200 dark:border-card-border">
          <div className="flex flex-col gap-4 px-6 py-5">
            {headerHyperLink.map((value, index) => (
              <NavBarHyperLink
                key={index}
                name={value.name}
                href={value.href}
                onClick={() => setIsOpen(false)}
              />
            ))}

            <button className="mt-2 h-10 rounded-lg bg-primary text-white font-bold">
              Hire Me
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default memo(NavBar);
