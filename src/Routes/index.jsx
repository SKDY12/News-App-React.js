import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Error from '../Pages/Error';
import News from '../Pages/News';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';


function Index() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/about" element={<About />}/>
        <Route path='/contact' element={<Contact />} />
        <Route path='/news' element={<News />} />
        <Route path='/*' element={<Error />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Index
