import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Better to see something once than hear about it a thousand times'
              label='History'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='The most beautiful in the world is, of course, the world itself'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Travel and change of place impart new vigor to the mind'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='The gladdest moment in human life is a departure into unknown lands'
              label='Adventure'
              path='/about-us'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Life is either a daring adventure or nothing at all'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;