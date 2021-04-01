import React from 'react';
import Grid from '@material-ui/core/Card';
import {flowers} from '../../FlowerData';
import FlowerCard from '../FlowerCard/FlowerCard';
import './FlowerList.css';
const FlowerList = ()=>{
return(
    <div>
        <Grid container spacing={5} className='product-list'> 
            {
                flowers.map(flower => (
                    <Grid item xs={3} key={flower.id}>
                        <FlowerCard img={flower.img} name={flower.name} price={flower.price}
                                inCart={flower.inCart} available={flower.available}
                            />
                    </Grid>
                ))
            }
        </Grid>
    </div>
)

}

export default FlowerList;