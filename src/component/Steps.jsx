import React from 'react';
import user from '../assets/user.png'
import packageImg from '../assets/package.png'
import rocketImg from '../assets/rocket.png'

const Steps = () => {
    return (
        <div className='bg-gray-100 flex flex-col gap-5 justify-center items-center py-36'>
             <h1 className='font-bold text-5xl'>Get Started in 3 Steps</h1>
             <p className='text-gray-700'>Start using premium digital tools in minutes, not hours.</p>
             <div className='grid grid-cols-3 gap-16 mx-40'>
                <div className='flex flex-col gap-3 justify-center items-center bg-base-100 rounded-2xl p-3 shadow-md'>
                   <p className='ml-72 py-1 px-1.5 border-b-fuchsia-900 bg-violet-800 rounded-full text-white font-bold'>01</p>
                   <span className='bg-violet-200 rounded-full p-2'> <img src={user}  alt="" />
</span>
                   <p className='font-bold text-3xl'>Create Account</p>
                   <p className='text-gray-500 text-center'>Browse our catalog and select the <br /> tools that fit your needs.</p>
                </div>
                <div className='flex flex-col gap-3 justify-center items-center bg-base-100 rounded-2xl p-3 shadow-md'>
                   <p className='ml-72 py-1 px-1.5 border-b-fuchsia-900 bg-violet-800 rounded-full text-white font-bold'>02</p>
                   <span className='bg-violet-200 rounded-full p-2'><img src={packageImg} alt="" /></span>
                   <p className='font-bold text-3xl'>choose product</p>
                   <p className='text-gray-500 text-center'>Browse our catalog and select the <br /> tools that fit your needs.</p>
                </div>
                <div className='flex flex-col gap-3 justify-center items-center bg-base-100 rounded-2xl p-3 shadow-md'>
                   <p className='ml-72 py-1 px-1.5 border-b-fuchsia-900 bg-violet-800 rounded-full text-white font-bold'>03</p>
                   <span className='bg-violet-200 rounded-full p-2'><img src={rocketImg} alt="" /></span>
                   <p className='font-bold text-3xl'>start creating</p>
                   <p className='text-gray-500 text-center'>Browse our catalog and select the <br /> tools that fit your needs.</p>
                </div>
             </div>
        </div>
    );
};

export default Steps;