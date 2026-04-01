import React from 'react';

const Rating = () => {
    return (
        <div className='flex gap-20 bg-linear-to-l from-fuchsia-900 to-violet-900 py-20 justify-around px-40'>
            <div className='flex flex-col gap-3 items-center'>
                <p className='font-bold text-6xl text-violet-50'>50K+</p>
                <p className='text-violet-200'>Active Users</p>
            </div>
            <div className='w-[0.5px] h-28 bg-violet-50'></div>
            <div className='flex flex-col gap-3 items-center'>
                <p className='font-bold text-6xl text-violet-50'>200+</p>
                <p className='text-violet-200'>Premium Tools</p>
            </div>
            <div className='w-[.5px] h-28 bg-violet-50'></div>
            <div className='flex flex-col gap-3 items-center'>
                <p className='font-bold text-6xl text-violet-50'>4.9</p>
                <p className='text-violet-200 '>Rating</p>
            </div>
        </div>
    );
};

export default Rating;