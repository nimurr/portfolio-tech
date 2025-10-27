"use client";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // ✅ imported from react-icons

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="sticky backdrop-blur-sm  h-0 border-b border-white/20 rounded-xl w-[70%] mx-auto top-0 left-0 right-0">
            <nav className=" backdrop-blur-sm  h-0 border-b border-white/20 rounded-xl">
                <div className=" flex justify-between items-center px-6 py-4">
                    {/* Logo */}
                    <div className="text-2xl max-w-[100px] font-bold text-gray-800">
                        <img className="w-full" src="/Images/logo.png" alt="" />
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center space-x-8 text-gray-800 font-medium">
                        <li>
                            <a href="#features" className="hover:text-blue-600 duration-200">
                                Features
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="hover:text-blue-600 duration-200">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#testimonials" className="hover:text-blue-600 duration-200">
                                Testimonial
                            </a>
                        </li>
                        <li>
                            <a href="#pricing" className="hover:text-blue-600 duration-200">
                                Pricing
                            </a>
                        </li>
                        <li>
                            <a href="#faq" className="hover:text-blue-600 duration-200">
                                FAQ
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-blue-600 duration-200">
                                Contact
                            </a>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-gray-800 focus:outline-none"
                    >
                        {isOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
                    </button>
                </div>

                {/* Mobile Dropdown Menu */}
                {isOpen && (
                    <div className="md:hidden bg-white/70 backdrop-blur-md border-t border-white/20">
                        <ul className="flex flex-col items-center py-4 space-y-4 text-gray-800 font-medium">
                            <li>
                                <a href="#features" onClick={toggleMenu}>
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="#about" onClick={toggleMenu}>
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#testimonials" onClick={toggleMenu}>
                                    Testimonial
                                </a>
                            </li>
                            <li>
                                <a href="#pricing" onClick={toggleMenu}>
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a href="#faq" onClick={toggleMenu}>
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a href="#contact" onClick={toggleMenu}>
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Header;
