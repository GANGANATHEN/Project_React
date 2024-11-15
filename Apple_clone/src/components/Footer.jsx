import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer className='py-5 sm:px-10 px-5'>
        <div className="screen-max-width">
            <div>
                <p className="font-semiboldtext-graytext-x5">More ways to shop:{' '}
                    <span className="underlinetext-blue">
                        Find an Apple Store {' '}
                    </span>
                    or
                    <span className="underline text-blue">
                        other retailer
                    </span>{' '}
                    near you.
                </p>
                <p className="font-semibold text-gray text-x5">
                    Or call 001100-020-0330
                </p> 
            </div>
            <div className="bg-neutral-700 my-5 h-[1px] w-full " />

            <div className="flex flex-col md:flex-rox md:flex-items-center justify-between">
                <p className="font-semibold text-gray text-x5">
                    Copyright @ 2024 Apple Inc. All rights reserved.
                </p>

                <div className="flex">
                    {footerLinks.map((link,i)=>{
                        <p key={link} className='font-semibold text-gray text-x5'>
                            {link}{' '}
                            {i !== footerLinks.length - 1 && (
                                <span className='mx-2'> | </span>
                            )}
                        </p>
                    })}
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer