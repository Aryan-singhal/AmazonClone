import React, { useContext, useState } from 'react'
import homeimg from '../../images/homeimg.jpg'
import './home.css'
import Products from '../Products/Products'
import { Basket } from '../../App'


function Homepage() {

  const basket=useContext(Basket);
  
  return (
    <>
        <img className='home_img' src={homeimg} alt="yo" />

        <div className="home_row">
        
        {basket.products.map((itemval)=>{
          // if(itemval.id==1112 || itemval.id==1111)
          return <Products 
          id={itemval.id}
        image={itemval.image}
          title={itemval.title}
          rating={itemval.rating}
          price={itemval.price}
          />
      })}

        {/* <Products
          id="1111"
          image="https://m.media-amazon.com/images/I/71f15JOOMEL._SY466_.jpg"
          title="Essential Percy Jackson Collection 7 COP Paperback – 7 December 2022
          by Rick Riordan (Author)"
          rating={5}
          price={1999}
            />

<Products
          id="1112"
          image="https://m.media-amazon.com/images/I/419sjsYXXaL.jpg"
          title="WOOD CRAFT Sheesham Wood Sofa Set 3 Seater with 2 Drawer Wooden Sofa Set for Living Room Home Office (Walnut Finish)"
          rating={4}
          price={21299}
            />

            
        </div>



        <div className="home_row">
        <Products
          id="1121"
          image="https://m.media-amazon.com/images/I/61HXaKiKOfL._SX522_.jpg"
          title="Kiara advani Wall Poster Sticker - Kiara advani Queen Wall Poster Sticker - Kiara advani Wall Sticker - 300GSM - Glossy - Strong Adhesive - starxdecals"
          rating={5}
          price={169}
            />

<Products
          id="1122"
          image="https://m.media-amazon.com/images/I/61yhPPcmesL._SX679_.jpg"
          title="Fire-Boltt India's No 1 Smartwatch Brand Talk 2 Bluetooth Calling Smartwatch with Dual Button, Hands On Voice Assistance, 120 Sports Modes, in Built Mic & Speaker with IP68 Rating (Black)"
          rating={3}
          price={1500}
            />

<Products
          id="1123"
          image="https://m.media-amazon.com/images/I/61kWB+uzR2L._SX522_.jpg"
          title="boAt Rockerz 370 On Ear Bluetooth Headphones with Upto 12 Hours Playtime, Cozy Padded Earcups and Bluetooth v5.0, with Mic (Buoyant Black)"
          rating={3}
          price={1099}
            />

            
        </div>


        <div className="home_row">
        <Products
          id="1131"
          image="https://m.media-amazon.com/images/I/81zqe4fNdlL._SY466_.jpg"
          title="Harry Potter Box Set: The Complete Collection (Children’s Paperback) Paperback – 1 December 2014
          by J.K. Rowling (Author)"
          rating={5}
          price={2299}
            /> */}



            
        </div>

        

    </>
  )
}

export default Homepage