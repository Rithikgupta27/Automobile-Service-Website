import React from 'react';
import '../../App.css';
import '../SinupReg.css';
import { Link } from 'react-router-dom'
import Footer from '../Footer'
import Navbar from '../Navbar';
function Register() {
  return <>
  <Navbar />
  <h1 className='Register'>Join Us</h1>;
       <div className="text-center m-5-auto">
            
            <form action="/home">
            {/* <h2>Join us</h2><br/> */}
            <h3>Create your Free account</h3><br/>
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" requiredc />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
        <Footer/>
</>
}

export default Register;
