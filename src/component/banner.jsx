import React from 'react';
import { CiPlay1 } from 'react-icons/ci';
import { GiUbisoftSun } from "react-icons/gi";

import Img from '../assets/banner.png';

export const Banner = () => {
    return (
        <div className='flex gap-60 mx-40 mt-20 md:flex-col-reverse' >
            <div className='flex flex-col gap-7 justify-center'>
              <p className='border-2 border-hidden bg-blue-100 rounded-3xl px-3 w-fit text-[16px] text-indigo-700 flex gap-1 items-center'><GiUbisoftSun />
New: AI-Powered Tools Available</p>
              <p className='font-bold text-6xl text-gray-800 '>Supercharge Your <br /> Digital Workflow</p>
              <p className='text-gray-700'>Access premium AI tools, design assets, templates, and productivity <br />
software—all in one place. Start creating faster today. <br />
Explore Products
</p>
  <div className='flex gap-4'>
    <button className='btn rounded-3xl font-bold bg-linear-to-r from-violet-600 to-fuchsia-600 text-white'>explore products</button>
    <button className='btn rounded-3xl border-2 border-blue-500 text-blue-500'><CiPlay1 />watch demo</button>
  </div>
            </div>
            <div className='max-w-[450px]'>
              <img src={Img} alt="Banner" />
            </div>
        </div>
    );
};

export default Banner;