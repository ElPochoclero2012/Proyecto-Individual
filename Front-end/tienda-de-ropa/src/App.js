import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from 'react-use-cart';
import { userContext } from './provider/userContext';
import NavBar from './components/NavBar';
import Title from './components/Title';
import Homepage from './components/Homepage';
import AboutUs from './components/AboutUs';
import ProductInfo from './components/ProductInfo';
import FAQ from './components/FAQ';
import Search from './components/Search';
import Login from './components/Login';
import Register from './components/Register';
import Tshirt from './components/Tshirt';
import Sweatshirts from './components/Sweatshirts';
import Hoodies from './components/Hoodies';
import Flags from './components/Flags';
import Vinyl from './components/Vinyl';
import AddProduct from './components/AddProduct';
import Cart from './components/Cart';
import Footer from './components/Footer';




function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const userLogged = JSON.parse(localStorage.getItem('user'));
    if(!userLogged){
      setUser(null);
    } else{
      setUser(userLogged);
    }
  }, [])
  

  return (
    <>
    <userContext.Provider value={{user, setUser}}>
    <BrowserRouter>
    <CartProvider>
      <header>
        <NavBar />
      </header>
      <body>
        <Title />
        
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/Search/:filter" element={<Search />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/ProductInfo/:id" element={<ProductInfo />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Tshirt" element={<Tshirt />} />
            <Route path="/Sweatshirts" element={<Sweatshirts />} />
            <Route path="/Hoodies" element={<Hoodies />} />
            <Route path="/Flags" element={<Flags />} />
            <Route path="/Vinyl" element={<Vinyl />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/AddProduct" element={<AddProduct/>} />
          </Routes>

      </body>
        <Footer />
      </CartProvider>
      </BrowserRouter>
      </userContext.Provider>
    </>
  );
}

export default App;