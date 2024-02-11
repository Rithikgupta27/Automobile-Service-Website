import React from 'react';
import '../../App.css';
import SinupReg from '../SinupReg';
import Footer from '../Footer'
import Navbar from '../Navbar';
 function SignUp() {
  return <>
  <Navbar />
  <h1 className='sign-up'>SIGN UP</h1>;
<SinupReg/>
<Footer/>
</>
}
export default SignUp;
