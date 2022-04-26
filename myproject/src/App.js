import React from "react";
import {BrowserRouter as Roter,Route,Link,Routes} from 'react-router-dom'
import Menu from "./Components/Menu/Menu";
import About from "./Pages/AboutPage/About";
import Contact from "./Pages/ContactPage/Contact";
import Corona from "./Pages/CoronaPage/Corona";
import HomePage from "./Pages/HomePage/HomePage";
import Register from "./Pages/RegisterPage/Register";


export default function App() {
  return (
   <Roter>
    <Menu/>
     <Routes>
        <Route path='/Home' element={<HomePage/>}/>
        <Route exact path='/AboutPage'element={<About/>}/>
        <Route exact path='/ContactPage'element={<Contact/>}/>
        <Route exact path='/CoronaPage'element={<Corona/>}/>
        <Route exact path='/RegisterPage'element={<Register/>}/>
     </Routes>
   </Roter>
  );
}


