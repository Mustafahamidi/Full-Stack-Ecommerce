import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            
            <div>
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum non nesciunt adipisci vitae suscipit ipsam est, laboriosam, modi dolorum quam ea, optio maiores dolorem ratione fuga natus! Aliquam, blanditiis pariatur.
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>0784305662</li>
                    <li>mmustafakhan260@gmail.com</li>
                </ul>
            </div>
        </div>

        
        <div className="w-full flex flex-col items-center text-center mt-10">
            <hr className="w-full mb-4" />
            <p className="py-5 text-sm">Copyright 2025@ forever.com - All Rights Reserved.</p>
        </div>

    </div>
  );
}

export default Footer;
