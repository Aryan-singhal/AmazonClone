
import './App.css';
// import Navbar from './components/navbar';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from './components/Header/Header';
import Homepage from './components/Homepage/home';
import Products from './components/Products/Products';
import Pr1 from '../src/images/alchemist.jpg'
import { createContext, useEffect, useState } from 'react';
import Checkout from './components/checkout/checkout';

// import "bootstrap/dist/css/bootstrap.min.css";
// import { FaMagnifyingGlass } from "react-icons/fa";
// import { GoSearch } from "react-icons/go";



const Basket = createContext();
const Cart = createContext();

function App() {
  
  
 
  const [t,sett]=useState(0);
  

  // useEffect(() => {
  //   // console.log('rerender')
  // },[t])

  const addtocart=(id)=>{
    basket.cart.push(JSON.stringify(id));
    // console.log(basket);
    sett(basket.cart. length+1);
    // console.log(t);
    {basket.cost=basket.cost+basket.products[id].price}
    
    basket.cart.sort()
    // {
    //   cart.qty++;
    // }

    // setitem((olditems)=>{
    //   return olditems.filter((arrEle,index)=>{
    //     return index!==id
    //   })
    // })

    {
      let i=0;
      while(i<basket.cart.length-1)
      {
        if(basket.cart[i]===basket.cart[i+1]){
            
        }
      }
    }
    
  }

  const [basket, setbasket]=useState({
    qty:[],
    tqty:0,
    cart:[],
    cost:0,
    addtocart,
    products:[
      {id:0,
      image:"https://m.media-amazon.com/images/I/71f15JOOMEL._SY466_.jpg",
      title:"Essential Percy Jackson Collection 7 COP Paperback – 7 December 2022 by Rick Riordan (Author)",
      rating:5,
      price:1999},
      
      {
        id:1,
          image:"https://m.media-amazon.com/images/I/419sjsYXXaL.jpg",
          title:"WOOD CRAFT Sheesham Wood Sofa Set 3 Seater with 2 Drawer Wooden Sofa Set for Living Room Home Office (Walnut Finish)",
          rating:4,
          price:21299
      },

      {
        id:2,
          image:"https://m.media-amazon.com/images/I/61HXaKiKOfL._SX522_.jpg",
          title:"Kiara advani Wall Poster Sticker - Kiara advani Queen Wall Poster Sticker - Kiara advani Wall Sticker - 300GSM - Glossy - Strong Adhesive - starxdecals",
          rating:5,
          price:169
      },

      {
        id:3,
          image:"https://m.media-amazon.com/images/I/61yhPPcmesL._SX679_.jpg",
          title:"Fire-Boltt India's No 1 Smartwatch Brand Talk 2 Bluetooth Calling Smartwatch with Dual Button, Hands On Voice Assistance, 120 Sports Modes, in Built Mic & Speaker with IP68 Rating (Black)",
          rating:3,
          price:1500,
      },

      {
        id:4,
          image:"https://m.media-amazon.com/images/I/61kWB+uzR2L._SX522_.jpg",
          title:"boAt Rockerz 370 On Ear Bluetooth Headphones with Upto 12 Hours Playtime, Cozy Padded Earcups and Bluetooth v5.0, with Mic (Buoyant Black)",
          rating:3,
          price:1099
      },

      {
        id:5,
          image:"https://m.media-amazon.com/images/I/81zqe4fNdlL._SY466_.jpg",
          title:"Harry Potter Box Set: The Complete Collection (Children’s Paperback) Paperback – 1 December 2014 by J.K. Rowling (Author)",
          rating:5,
          price:2299,
      }

    ],

    // cart: new Array(basket.products.length),
  });

  // let qtty=new Array(basket.products.length);

  // const {cart, setcart}=useState({
  //   qty:qtty
  // })
  const [item,setitem]=useState(basket.cart);
  
  
  return (
    // <Cart.Provider value={cart}>
    <Basket.Provider value={basket}>
       <div className="App">
      <Router>
        <Routes>
          
          <Route path='/' element={
            <>
            <Header/>
            <Homepage/>
          
           </> 
          } />



          <Route path='/checkout' element={<>
            <Header/>
            <Checkout/>
          </>} />




          <Route path='/login' element={<h1>Login</h1>} />

          <Route path='/productinfo' element={<h1>productinfo</h1>} />

          
            
          
        </Routes>
      </Router>
    </div>
  
    </Basket.Provider>
    // </Cart.Provider>
  );
}

export default App;
export {Basket};
// export  {Cart};