import React, { useContext, useState, useEffect } from 'react'
import { Basket } from '../../App'
import Products from '../Products/Products';
import './checkout.css'



const Checkout = () => {
    const basket=useContext(Basket);
    // const len=basket.cart.length;
    // let arr=new Array(len);

    // const item=()=>{
    //     {
    //         let i=0;
    //         while(i<arr.length)
    //         {
    //             arr[i]=false;
    //         }
            
    //     }

    //     console.log(arr)
    // }

    useEffect(() => {
      
    // basket.cart.sort();
    // console.log(basket.cart)
      
    },[basket.cart])
    

  return (
    <div> 
        
            {basket.cart.map((item)=>{
                return<div className='wrapper'>
                
                <div className='products'>
                <Products 
                id={basket.products[item].id}
                image={basket.products[item].image}
                  title={basket.products[item].title}
                  rating={basket.products[item].rating}
                  price={basket.products[item].price}
                />

                </div>

                <div className='qty'>
                    {
                        
                    }

                </div>
                
                </div>
                })
             }

             <br />
             <br />
             <h1>TOTAL COST: Rs. {basket.cost}</h1>
         
        
    </div>
  )
}

export default Checkout