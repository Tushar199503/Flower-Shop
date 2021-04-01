import React from 'react';
import {Typography} from '@material-ui/core';
import './TestimonialCard.css';

const TestimonialCard = (props)=>{
return(
    <>
<div className="testimonialcard" >
    <div className='card-content'> 
        <h6>{props.des}</h6>
        <img
          src={props.img}
          alt={props.name} 
          width={'86rem'} 
          height={'86rem'}
          style={{borderRadius: '100%'}}
        />
       <Typography variant={'h7'}>{props.name}</Typography>
    
    </div>
</div>
</>
)

}

export default TestimonialCard;