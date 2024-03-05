import { Link } from 'react-router-dom'
import React, { useContext, useState } from 'react'
import './product.css'
// import { useStateValue } from '../ReactContextApi/StateProvider';
import { Basket } from '../../App';


function Products({id,image, title, rating, price}) {

  const basket=useContext(Basket);
  
  
  // const [{}, dispatch]=useStateValue();
  // const addtobasket=()=>{
  //     dispatch({
  //       type: "ADD_TO_BASKET",
  //       item:{
  //           id: id,
  //           image: image,
  //           title: title,
  //           rating: rating,
  //           price: price
  //       }
  //     })

  // };

  // const addtobasket=(id)=>{
  //   // setbasktemp(...basktemp, id);
    
  //   // setbasktemp((olditems)=>{
  //   //   return [...olditems, id];
  //   // });
    
  //   console.log(basket);
  // }

  return (
    <div className='product'>
        <div className="product_info">
        <a href='productinfo'>{title}</a>
        <p className='product_price'>
            <small>₹ </small>
            <strong>{price}</strong>
        </p>

        <p className="product_rating">
            {
                Array(rating)
                .fill()
                .map((_)=>(<p>⭐</p>))

            }
        </p>
        </div>
        

        <Link to='/productinfo'><img className='img' src={image} alt=''></img></Link>
        
       

        
            <button onClick={()=>{basket.addtocart(id)}}>Add to Cart</button>
       
        
            
    </div>
  )
}

export default Products