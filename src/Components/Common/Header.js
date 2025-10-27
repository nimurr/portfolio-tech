"use client";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // ✅ imported from react-icons

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="containerCustom sticky backdrop-blur-xl z-[999] border border-gray-200 rounded-xl  mx-auto top-10 left-0 right-0">
            <nav className="">
                <div className=" flex justify-between items-center px-6 py-4">
                    {/* Logo */}
                    <a href="#hero" className="text-2xl max-w-[100px] font-bold text-gray-800">
                        <img className="w-full" src="/Images/logo.png" alt="" />
                    </a>

                    {/* Desktop Menu */}
                    <ul className="hidden lg:flex items-center space-x-8 font-medium text-gray-500 text-xl">
                        <li>
                            <a href="#features" className="hover:text-[#1b0c25] duration-200">
                                Features
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="hover:text-[#1b0c25] duration-200">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#testimonials" className="hover:text-[#1b0c25] duration-200">
                                Testimonial
                            </a>
                        </li>
                        <li>
                            <a href="#pricing" className="hover:text-[#1b0c25] duration-200">
                                Pricing
                            </a>
                        </li>
                        <li>
                            <a href="#faq" className="hover:text-[#1b0c25] duration-200">
                                FAQ
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className=" bg-[#1b0c25] hover:bg-[#311742] py-3 px-5 rounded-md text-white duration-200">
                                Contact
                            </a>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden text-gray-800 focus:outline-none"
                    >
                        {isOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
                    </button>
                </div>

                {/* Mobile Dropdown Menu */}
                {isOpen && (
                    <div className="lg:hidden absolute top-full left-0 w-full backdrop-blur-2xl rounded-2xl border bg-[#19181aec] border-white/50 text-white">
                        <ul className="flex flex-col items-center py-4 space-y-4  font-medium">
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
