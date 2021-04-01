import React from 'react';
import Grid from '@material-ui/core/Card';
import {testimonialdata} from '../../TestimonialData';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import './TestimonialList.css';
const TestimonialList = ()=>{
return(
    <div>
        <Grid container spacing={5} className='product-list_1'> 
            {
                testimonialdata.map(testi => (
                    <Grid item xs={3} key={testi.id}>
                        <TestimonialCard img={testi.img} name={testi.name} des={testi.des}
                               
                            />
                    </Grid>
                ))
            }
        </Grid>
    </div>
)

}

export default TestimonialList;