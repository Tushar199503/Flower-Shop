import React from 'react';
import {Typography} from '@material-ui/core';
import './FlowerCard.css';

const FlowerCard = (props)=>{
return(
    <>
<div className="flowercard" >
    <div> 
        <>
        <img src={props.img} alt={props.name} width={'264rem'} height={'264rem'}></img>
        <div className='card-content'>
            <Typography variant={'h7'}>{props.name}</Typography>
            <h3>{props.price}</h3>
        </div>
        <div className='card-content'>
            <h4 style={
            {padding: '0.3rem 0.6rem', 
            borderRadius: '5rem',
             backgroundColor: props.inCart ? 'green' : 'red'
             }}>In Cart</h4>
            <h6>{props.available ? 'In stock': 'Not Available'}</h6>
        </div>
        </>
    </div>
</div>
</>
)

}

export default FlowerCard;