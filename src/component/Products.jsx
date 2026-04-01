import React, { use, useState } from 'react';
import Product from './product';
import Cartlist from '../Cartlist';

export const Products = ({fetchProducts}) => {

 const fetchData=use(fetchProducts)

    const [type,setType]=useState('available')
    const [select,setCartList]=useState([])
 
 
    console.log(fetchData)
    return (
        <>
         <div className='flex justify-center items-center mt-20 mb-10 flex-col gap-5 mx-[30rem] sm:flex-wrap'>
            <h2 className='font-bold text-5xl'>Premium Digital Tools</h2>
            <p className='text-violet-900 text-center '>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
            <div className='border-2 flex border-gray-400 gap-0.5 rounded-3xl'>
                <button onClick={()=> setType('available')}
                 className={`btn rounded-3xl font-bold ${type==='available'?"bg-linear-to-r from-violet-600 to-fuchsia-600":""} text-gray-900`}>Products</button>
                <button 
                onClick={()=> setType('selected')}
                 className={`btn rounded-3xl font-bold ${type==='selected'?"bg-linear-to-r from-violet-600 to-fuchsia-600":""} text-gray-900`}
                >Cart({select.length})</button>
            </div>
        </div>

{
    type==="available" ?(

    <div className='grid grid-cols-3  gap-8 mx-0 px-36 py-20 '>
                {
        fetchData.map(product => (
  <Product 
    key={product.id} 
    product={product} 
    setCartList={setCartList}
    select={select}
  />
))}
    </div>):(
        <div>
           <Cartlist
           select={select}
          setCartList={setCartList}>

           </Cartlist>
        </div>
    )}

        </>
       
        
    );
};

export default Products;