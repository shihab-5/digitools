import React, { useState } from 'react';
import Feature from './Feature';
import { toast } from 'react-toastify';


export const Product = ({product,setCartList,select}) => {

      const [buy,setBuy]=useState(false)

    const click=()=>{

        const exists =select.find(pdct => pdct.name==product.name);
        if(exists){
 toast.success(`${product.name} is select to the cart`)
 return;}
setBuy(!buy);
setCartList([...select,product]);
    }
    return (
        <div>
          <div className="card rounded-2xl h-full w-96 bg-base-100 shadow-2xl">
            <span className="badge badge-xs badge-warning mt-8 ml-72 px-3 py-3 text-[1rem]">{product.tagType}</span>
  <div className="card-body">
    <div className="flex flex-col gap-3">
      <img src={product.img} className='w-12 h-12 m-5' alt="" />
      <h2 className="text-3xl font-bold">{product.name}</h2>
      <p className='text-gray-600'>{product.description}</p>
      <span className="text-gray-600 "><span className='font-bold text-2xl'>{product.price}</span>/{product.period}</span>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
        {
        product.features.map((feature,index)=>(
        <li className='flex' key={index}>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <p>{feature}</p>
        </li>
            ))
        }

    </ul>
    <div className="mt-6">
      <button
      onClick={click}
      className="btn bg-linear-to-r from-violet-600 to-fuchsia-600 btn-block rounded-3xl text-white font-bold">{buy ?'Added to the cart':'Buy NOw'}</button>
    </div>
    </div>
    
  </div>
</div>
        </div>
    );
};

export default Product;