import React from 'react'
import { NavLink } from 'react-router-dom'
import './menu.css'



export default function Menu(){
    return(
        <div id='nav'>
           <ul id='ul'>
             <NavLink to='/Home'className={({isActive})=>(isActive?"Li1":"Li2")}><li>Home</li></NavLink>
             <NavLink to='/AboutPage'className={({isActive})=>(isActive?"Li1":"Li2")}><li>About</li></NavLink>
             <NavLink to='/ContactPage'className={({isActive})=>(isActive?"Li1":"Li2")}><li>Contact</li></NavLink>
             <NavLink to='/CoronaPage'className={({isActive})=>(isActive?"Li1":"Li2")}><li>Corona</li></NavLink>
             <NavLink to='/RegisterPage'className={({isActive})=>(isActive?"Li1":"Li2")}><li>Register</li></NavLink>
           </ul>
        </div>
    )
}