import React from 'react';
import {Link} from 'react-router-dom';
import './Contact.css';
import {ImLocation} from 'react-icons/im';
import {AiOutlineClockCircle, AiFillPhone} from 'react-icons/ai';



const Contact = ()=>{
return(
    <div className='contact'>
			<div className='img' style={{backgroundImage: 'url(assets/img/bg-09-free-img.jpg)'}}>
				<div className='text'>Contact</div>
			</div>
            <div className='justify-center'>
                <h1>Get In Touch</h1>
                <h1>______________________</h1>
                
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Ut enim ad minim veniam.</p>
            </div>
            <div className='contact-footer'>
                <div className='contact-details'>
                    <div>
                        <h4 className='flex-style'><ImLocation/>Location</h4>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                        <div>
                            <h4 className='flex-style'><AiOutlineClockCircle/>Opening Hours</h4>
                            <p>Lorem ipsum dolor sit amet</p>    
                        </div>
                        <div>
                            <h4 className='flex-style'><AiFillPhone/>Contact</h4>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                </div>
                <div className='flex-style'>
                        Form
                </div>
            </div>
           
		    
</div>
)

}

export default Contact;