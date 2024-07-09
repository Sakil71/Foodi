import React from 'react';
import { assets } from '../../assets/assets';
import { format } from 'date-fns';

const Footer = () => {
    return (
        <div className='bg-black text-white'>
            <div className="md:flex lg:flex justify-between gap-10 px-10 pt-10">
                <div className='mb-8 md:w-[40%] lg:w-[40%]'>
                    <h1 className="text-4xl font-bold text-[#f53535]">foodi</h1>
                    <p className='opacity-70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod laboriosam voluptas distinctio unde.</p>
                    <div className='mb-8 flex gap-4 mt-8'>
                        <img className='w-8 cursor-pointer hover:opacity-70' src={assets.facebook_icon} alt="" />
                        <img className='w-8 cursor-pointer hover:opacity-70' src={assets.twitter_icon} alt="" />
                    </div>
                </div>
                <div className='mb-8 flex flex-col'>
                    <h6 className="text-xl font-medium mb-3">Services</h6>
                    <a className="link link-hover opacity-70">Branding</a>
                    <a className="link link-hover opacity-70">Design</a>
                    <a className="link link-hover opacity-70">Marketing</a>
                    <a className="link link-hover opacity-70">Advertisement</a>
                </div>
                <div className='mb-8 flex flex-col'>
                    <h6 className="text-xl font-medium mb-3">Company</h6>
                    <a className="link link-hover opacity-70">About us</a>
                    <a className="link link-hover opacity-70">Contact</a>
                    <a className="link link-hover opacity-70">Jobs</a>
                    <a className="link link-hover opacity-70">Press kit</a>
                </div>
                <div className='mb-8 flex flex-col'>
                    <h6 className="text-xl font-medium mb-3">Legal</h6>
                    <a className="link link-hover opacity-70">Terms of use</a>
                    <a className="link link-hover opacity-70">Privacy policy</a>
                    <a className="link link-hover opacity-70">Cookie policy</a>
                </div>
            </div>

            <div className="flex justify-center mb-5">
                <hr className="w-[70%] h-[0.1px] md:mt-10 lg:mt-10 opacity-20" />
            </div>
            <p className=' text-center text-xs'>&copy;{format(new Date(), 'y')}, foodi - all right reserved</p>
        </div>
    );
};

export default Footer;