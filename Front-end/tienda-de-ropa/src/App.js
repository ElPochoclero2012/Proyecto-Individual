import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react'
import NavBar from './components/NavBar';
import Homepage from './components/Homepage';
import Footer from './components/Footer';



function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <body>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </BrowserRouter>
      </body>
        <Footer />
    </>
  );
}

export default App;