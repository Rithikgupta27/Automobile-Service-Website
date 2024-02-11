import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our product and services</h1>
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
        </div>
      </div>
    </div>
  );
}

export default Cards;
