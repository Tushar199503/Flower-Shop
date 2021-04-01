import React from 'react';
import {Link} from 'react-router-dom';
import TestimonialList from '../Components/TestimonialList/TestimonialList';
import './Testimonial.css';




const Testimonial = ()=>{
return(
    <>
			<div className='about-img' style={{backgroundImage: 'url(assets/img/bg-08-free-img.jpg)'}}>
				<div className='about-text'>Testimonial</div>
			</div>
            <TestimonialList/>
		    
</>
)

}

export default Testimonial;