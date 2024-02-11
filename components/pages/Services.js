import React from 'react';
import '../../App.css';
import Footer from '../Footer'
import Newcards from '../Newcard';
import Navbar from '../Navbar';

 function Services() {
  return<> 
  <Navbar />
  <h1 className='services'>SERVICES</h1>
  
  <Newcards/>
  <Footer/>
  </>
}
export default Services;