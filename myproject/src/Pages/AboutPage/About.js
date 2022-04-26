import React from 'react'
import Likes from '../../Components/Likes/Likes'
import './About.css'
import moon from './moon.jpg'
import Comments from '../../Components/Comments/Comments'

export default function About(){
    return(
        <div className='about'>
           <div className='wrap'>
               <div className='card'>
                   <div className='card-image'>
                     <img src={moon} alt='moon'/>
                     <Likes/>
                   </div>
                   <Comments/>
               </div>
           </div>
        </div>
    )
}