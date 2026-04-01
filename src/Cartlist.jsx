import React from 'react';

const Cartlist = ({select}) => {
    console.log(select)
    return (
        <div className='mx-52 my-16 p-9'>
            <h1 className='font-bold text-3xl'>your cart</h1>
    
        {select.map((product,ind) =>(
              <div key={ind}
                className='flex gap-3 cart bg-base-200 rounded-2xl py-3 px-5'>
               <img src={product.img} className='w-9 h-9'  alt="" />
               <p className='font-bold text-2xl'>{product.name} <br /><span className='text-gray-700 text-[1rem]'>{product.price}</span></p>
                </div>
            
        ))
    }
        </div>
    );
};

export default Cartlist;