import React from 'react';
import '../../App.css';
import "../SinupReg.css";
import { Link } from 'react-router-dom'
import Footer from '../Footer'
import Navbar from '../Navbar';
function ForgetPwd() {
  return <>
  <Navbar />
<div className="text-center m-5-auto">
            
            <form action="/login">
            <h2>Reset your password</h2>
           <br/>
            <h5> Enter your email address and<br/>
                we will send you a new password</h5>
            <br/><p>
                    <label id="reset_pass_lbl">Email address</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Send password reset email</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
        <Footer/>
</>
}
export default ForgetPwd;
