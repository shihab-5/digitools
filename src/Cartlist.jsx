import React from 'react';
import { AiFillDelete } from "react-icons/ai";
import { toast } from 'react-toastify';


const Cartlist = ({select,setCartList}) => {
    console.log(select)

    const deletProduct=(product)=>{
        console.log(product)
 const filterProduct = select.filter(
    (selectProdct) => selectProdct.name !== product.name,
 );
 toast.error(`${product.name} is removed from the cart`)
 console.log(filterProduct)
setCartList(filterProduct)
    }
    return (
        <div className='mx-52 my-16 p-9 flex flex-col gap-6 shadow-xl rounded-2xl'>
            <h1 className='font-bold text-3xl'>your cart</h1>
    
        {select.map((product,ind) =>(
                   <div key={ind}
                className='flex gap-3 cart bg-gray-200 rounded-2xl py-3 px-5 items-center'>
                <span className='p-3 border-amber-50 rounded-2xl'><img src={product.img} className='w-9 h-9'  alt="" />
</span>
               <p className='font-bold text-2xl'>{product.name} <br /><span className='text-gray-700 text-[1rem]'>{product.price}</span></p>
                <button className='btn text-red-600 rounded-2xl ml-[600px]' onClick={()=> deletProduct(product)}><AiFillDelete /> remove</button>   

                </div>
       
                
            
        ))
    }
      <p>total:{}</p>
        <button className='btn rounded-3xl font-bold bg-linear-to-r from-violet-600 to-fuchsia-600 text-white' >Proceed to Checkout</button>

        </div>
    );
};

export default Cartlist;