import React from 'react';

export const Nav = () => {
    return (
        <div>
            <div className="navbar flex justify-around bg-base-100 shadow-sm">
  <div className="">
    <a className="btn btn-ghost text-3xl font-bold bg-linear-to-r from-violet-600 to-fuchsia-600 text-transparent bg-clip-text">DigiTools</a>
  </div>
  <div>
    <ul className='flex gap-4'>
        <li className='font-medium btn btn-ghost'>Products</li>
        <li className='font-medium btn btn-ghost'>Features</li>
        <li className='font-medium btn btn-ghost'>Pricing</li>
        <li className='font-medium btn btn-ghost'>Testimonials</li>
        <li className='font-medium btn btn-ghost'>FAQ</li>
    </ul>
  </div>
  <div className="flex gap-3 items-center">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
        <div className="card-body bg-primary">
          <span className="text-lg font-bold text-white">8 Items</span>
          <span className=" text-blue-100">Subtotal: $999</span>
        </div>
      </div>
    </div>
    <p className='font-medium btn btn-ghost'>login</p>
    <button className='btn rounded-3xl font-bold bg-linear-to-r from-violet-600 to-fuchsia-600 text-white' >get started</button>
  </div>
</div>
        </div>
    );
};

export default Nav;