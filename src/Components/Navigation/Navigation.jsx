import React from 'react';
import {Link} from 'react-router-dom';

import './Navigation.css';


const Navigation = ()=>{
return(
    <>
<div className="navigate" >
    <div><Link to="/">Home</Link></div>
    <div><Link to="/about">About</Link></div>
    <div><Link to="/testimonial">Testimonial</Link></div> 
    <div><Link to="/contact">Contact</Link></div>   
    <div><Link to="/sign">Signup</Link></div>   
</div>
</>
)

}

export default Navigation;