import React from 'react';
import CardItem from './CardItem';
import './Event.css';

function Event(){
    return(
        <div className='event'>
            <h1>Spots Meet</h1>
            <div className='event__container'>
                <div className='event__wrapper'>
                <ul className='event__items'>
                        <CardItem 
                        src='image/sapphire.jpg'
                        text='***Sapphire Heroes***'
                        label='Event'
                        path='/SapphireHeroes'/>
                        
                        <CardItem 
                        src='image/emerald.jpg'
                        text='***Emerald Fighters***'
                        label='Event'
                        path='/news-and-campaigns'/>

<CardItem 
                        src='image/ruby.jpg'
                        text='***Ruby Adventures***'
                        label='Event'
                        path='/news-and-campaigns'/>

<CardItem 
                        src='image/citrin.jpg'
                        text='***Citring Worriers***'
                        label='Event'
                        path='/news-and-campaigns'/>

                    </ul>
                    <ul className='event__items'>

                        <CardItem 
                        src='image/Event.jpg'
                        text='******************************************'
                        label='Event'
                        /* path='/news-and-campaigns'*//>
                        <CardItem 
                        src='image/Add.jpg'
                        text='******************************************'
                        label='Sport'
                        path='/news-and-campaigns'/>
                        </ul>
                    <ul className='event__items'>
                        <CardItem 
                        src='image/rugby.jpg'
                        text='******************************************'
                        label='Compatition'
                        path='/news-and-campaigns'/>
                    
                        <CardItem 
                        src='image/sports.jpg'
                        text='******************************************'
                        label='Event'
                        path='/news-and-campaigns'/>
                        </ul>
             
                </div>
            </div>
        </div>
    );
}

export default Event;