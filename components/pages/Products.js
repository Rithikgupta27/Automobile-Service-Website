import React from 'react';
import '../../App.css';
import ProductCard from '../ProductCards'
import Footer from '../Footer'
import Navbar from '../Navbar';
function Products() {
  return <>
  <Navbar />
  <h1 className='products'>PRODUCTS</h1>
  <ProductCard/>
  <Footer/>
  </>
}
export default Products;

