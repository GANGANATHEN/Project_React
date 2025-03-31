import React from 'react'
import Logo from "../assets/logo/Logo.svg";
// import img from "../assets/others/illustration.svg";
// import { useState } from 'react';

const Navbar = () => {
  return (
    <>
        <div className='px-20 py-3 bg-white'>
            <div className='flex justify-between items-center'>
                <img src={Logo} alt="logo"/>
                <ul className='flex justify-end gap-8 items-center font-inter font-semibold'>
                    <li>Home</li>
                    <li>Features</li>
                    <li>Community</li>
                    <li>Blog</li>
                    <li className='text-primary'>Pricing</li>
                    <a className=' font-semibold' href="#"><li>Register Now -{'>'}</li></a>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar
