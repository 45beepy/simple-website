"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { TiThMenu } from "react-icons/ti";
import { FaPhoneAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import clsx from 'clsx';
import Logo from "./Logo";
import Image from "next/image";

export default function Navbar() {
    const [isSideMenuOpen, setMenu] = useState(false);
    const navLinks = [
        { label: "About Us", link: '#' },
        { label: "Outlets", link: '#' },
        { label: "Location", link: '#' },
        { label: "Contact", link: '#' }
    ];

    return (
        <main>
            <nav className='backdrop-blur flex justify-between px-8 items-center py-6 bg-purple-900'>
                <div className='flex items-center gap-6'>
                    <section className='flex items-center gap-4'>
                        {/* Menu */}
                        <div onClick={() => setMenu(true)} className='text-3xl cursor-pointer lg:hidden'>
                            <TiThMenu />
                        </div>
                        {/* Logo */}
                        <Link href='/' className='text-4xl font-mono'>
                            <Logo />
                        </Link>
                    </section>
                </div>
                
                {/* Centered Navigation Links */}
                <div className='hidden lg:flex items-center gap-6'>
                    {navLinks.map((d, i) => (
                        <Link
                            key={i}
                            className='text-2xl font-medium rounded text-gray-400 hover:text-red-400 transition duration-300 transform hover:-translate-y-1 hover:scale-110'
                            href={d.link}
                        >
                            {d.label}
                        </Link>
                    ))}
                </div>

                {/* Sidebar mobile menu */}
                <div className={clsx(
                    'fixed h-full w-screen lg:hidden bg-black/10 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all',
                    isSideMenuOpen && 'translate-x-0'
                )}>
                    <section className='text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 flex'>
                        <div onClick={() => setMenu(false)} className='mt-0 mb-8 text-3xl cursor-pointer'>
                            <IoClose />
                        </div>
                        {navLinks.map((d, i) => (
                            <Link key={i} className='font-mono hover:text-red-400' href={d.link}>
                                {d.label}
                            </Link>
                        ))}
                    </section>
                </div>

                <section className='flex items-center gap-4 lg:hidden'>
                    {/* Call */}
                    <a href='tel:+919894832214'>
                        <div className='text-3xl cursor-pointer animate-bounce'>
                            <FaPhoneAlt />
                        </div>
                    </a>
                </section>
            </nav>
            <hr />
        </main>
    );
}
