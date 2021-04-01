import React from 'react';
import {Link} from 'react-router-dom';
import './About.css';
import Slider from '../Components/Slider/Slider';

const slides = [
	{ src: 'assets/img/pic-14.jpg', description: 'Lorem ipsum'},
	{ src: 'assets/img/pic-16.jpg', description: 'Lorem ipsum'},
	{ src: 'assets/img/pic-13.jpg', description: 'Lorem ipsum'}
  ];

const About = ()=>{
return(
    <>
			<div className='about-img' style={{backgroundImage: 'url(assets/img/bg-05-free-img.jpg)'}}>
				<div className='about-text' style={{color:'black'}}>About</div>
			</div>
			<div className="container">

					<div>
							<h1>WELCOME TO <strong>FC Flower</strong></h1>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</p>
					</div>
                    <div>
                        <img src="assets/img/team30.jpg" alt="" width={364}/>
                    </div>
			</div>
			<Slider slides={slides}/>        
</>
)

}

export default About;