import React, { useState } from 'react';
import { PiBellRingingLight } from "react-icons/pi";
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen) // !false = true
    }

    return (

        <>
            {/*  */}

            <div className='main-container flex items-center justify-between mt-2'>

                <Link to='/'>
                    <div className=''>
                        <img className='w-[300px] h-[100px] object-cover' src="https://i.ibb.co.com/rkdw5WD/logo-icon.png" alt="logo" />
                    </div>
                </Link>

                <div className=' w-[252px] flex items-center gap-x-6 rounded-[10px] px-[32px] py-[10px] bg-[#D9D9D933]'>

                    <div className='text-[#000] text-[20px] font-["Roboto"] font-[400] leading-normal'>
                        Bell Counter
                    </div>


                    <div className='flex'>
                        <PiBellRingingLight className='w-[32px] h-[32px]' />
                        <div className='w-[28px] h-[29px] text-[#000] text-[24px] font-[700] font-["Roboto"] leading-normal '> <sup>6</sup> </div>
                    </div>

                </div>


                <div className='hidden sm:flex items-center gap-x-[12px]'>
                    <Link>
                        <button className='border-[1px] border-[#767676] bg-[#E3E3E3] px-[50.75px] py-[8px] rounded-[8px] text-[16px] text-[#1E1E1E] font-[400] font-["Inter"] leading-[16px] transition-all duration-[300ms] ease-linear hover:bg-[#2C2C2C] hover:text-[#F5F5F5]'> Sign in </button>
                    </Link>

                    <Link>
                        <button className='border-[1px] border-[#767676] bg-[#E3E3E3] px-[44.75px] py-[8px] rounded-[8px] text-[16px] text-[#1E1E1E] font-[400] font-["Inter"] leading-[16px] transition-all duration-[300ms] ease-linear hover:bg-[#2C2C2C] hover:text-[#F5F5F5]'> Register </button>
                    </Link>
                </div>

                {/* Hamburger Icons */}

                <div className='sm:hidden'>
                    <button onClick={toggleMenu} className='text-black'>
                        <svg
                            fill='none'
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            viewBox='0 0 24 24'
                            className='w-6 h-6'
                        >

                            <path d="M4 6h16M4 12h16M4 18h16"> </path>
                        </svg>

                    </button>

                </div>


                {/* Mobile Menu */}
                {
                    isMenuOpen ?
                        (
                            <div className='flex flex-col items-center gap-y-[12px] sm:hidden'>
                                <Link>
                                    <button className='border-[1px] border-[#767676] bg-[#E3E3E3] px-[50.75px] py-[8px] rounded-[8px] text-[16px] text-[#1E1E1E] font-[400] font-["Inter"] leading-[16px] transition-all duration-[300ms] ease-linear hover:bg-[#2C2C2C] hover:text-[#F5F5F5]'> Sign in </button>
                                </Link>

                                <Link>
                                    <button className='border-[1px] border-[#767676] bg-[#E3E3E3] px-[44.75px] py-[8px] rounded-[8px] text-[16px] text-[#1E1E1E] font-[400] font-["Inter"] leading-[16px] transition-all duration-[300ms] ease-linear hover:bg-[#2C2C2C] hover:text-[#F5F5F5]'> Register </button>
                                </Link>
                            </div>
                        )

                        : null
                }

            </div>

        </>
    );
};

export default Navbar;