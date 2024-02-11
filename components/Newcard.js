import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import './SinupReg.css';
import {Link} from 'react-router-dom';

function Newcards() {
  return (
    <div className='cards'>
      <h1>Check out our Services</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Our expert technicians will inspect your car and ensure that the best car service is provided to you.'
              label='ROUTINE CHECK-UP'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Vehicle diagnosis by our expert'
              label='DIAGNOSIS'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text=' Tire and wheel services such as wheel alignments, tire balancing, and flat tire repairs.' 
              // This can include washing, waxing, polishing, and vacuuming the interior.'
              label='WHEEL SERVICE'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Full vehicle diagnosis using different tools'
              label='VEHICLE DIAGNOSIS'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Full vehicle check-up'
              label='FULL CHECK-UP'
              path='/sign-up'
            />
          </ul>
  {/* <-BOOKING FORM->         */}
            <form action="/home">
          <h3>Book For a Service</h3><br/>
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Mobile no.</label><br/>
                    <input type="text" name="mobilerno." required />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <label>Select service</label><br/>
                    <select name="cars" id="cars">
                         <optgroup label="Vehicle Wash">Vehicle Wash
                          <option value="ioc">inner and outer cleaning</option>
                         <option value="oc">Outer cleaning</option>
                         <option value="ic">Inner cleaning</option> 
                         </optgroup>
                         <optgroup label="Services">
                         <option value="mercedes">Oil Change</option>
                         <option value="audi">Engine Checkup</option>
                         <option value="audi">Full vehicle Service</option>
                         </optgroup>
                         </select>
                </p>
                
                {/* <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p> */}
                <p>
                    <button id="sub_btn" type="submit">Book</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
          {/* <--end of service booking form-> */}
        </div>
      </div>
    </div>
  );
}

export default Newcards;
