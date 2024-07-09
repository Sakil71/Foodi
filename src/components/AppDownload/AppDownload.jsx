import React from 'react';
import { assets } from '../../assets/assets';

const AppDownload = () => {
    return (
        <div className='my-20 text-center'>
            <h1 className='text-2xl font-medium'>For better experience download</h1>
            <h1 className='text-4xl font-medium'><span className='text-[#ec2d01]'>foodi</span> app</h1>
            <div className='flex justify-center gap-4 mt-5'>
                <img className='w-32 cursor-pointer hover:scale-105 duration-300' src={assets.play_store} alt="" />
                <img className='w-32 cursor-pointer hover:scale-105 duration-300' src={assets.app_store} alt="" />
            </div>
        </div>
    );
};

export default AppDownload;