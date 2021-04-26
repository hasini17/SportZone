import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards(){
    return(
        <div className='cards'>
            <h1>Sport highlights</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                        src='image/1.jpg'
                        text='******************************************'
                        label='Event'
                        /* path='/news-and-campaigns'*//>
                        <CardItem 
                        src='image/2.jpg'
                        text='******************************************'
                        label='Sport'
                        path='/news-and-campaigns'/>
                        </ul>
                    <ul className='cards__items'>
                        <CardItem 
                        src='image/4.jpg'
                        text='******************************************'
                        label='Compatition'
                        path='/news-and-campaigns'/>
                    
                        <CardItem 
                        src='image/3.jpg'
                        text='******************************************'
                        label='Event'
                        path='/news-and-campaigns'/>
                        </ul>
                     <ul className='cards__items'>
                        <CardItem 
                        src='image/7.jpg'
                        text='******************************************'
                        label='Event'
                        path='/news-and-campaigns'/>
                        <CardItem 
                        src='image/6.jpg'
                        text='******************************************'
                        label='Event'
                        path='/news-and-campaigns'/>


                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;