import {Link} from 'react-router-dom';
import React from 'react';
import FlowerList from '../Components/FlowerList/FlowerList';
import Slider from '../Components/Slider/Slider';

const slides_1 = [ 
  { src: 'assets/img/banner1.jpg', description: 'Lorem ipsum'},
  { src: 'assets/img/banner2.jpg', description: 'Lorem ipsum'},
  { src: 'assets/img/banner3.jpg', description: 'Lorem ipsum'}
];

const slides_2 = [
  { src: 'assets/img/img-01.jpg', description: 'Lorem ipsum'},
  { src: 'assets/img/img-05.jpg', description: 'Lorem ipsum'},
  { src: 'assets/img/img-06.jpg', description: 'Lorem ipsum'},
  { src: 'assets/img/pic-01.jpg', description: 'Lorem ipsum'},
  { src: 'assets/img/pic-02.jpg', description: 'Lorem ipsum'},
  { src: 'assets/img/pic-07.jpg', description: 'Lorem ipsum'}
];


const Home = ()=>{
return(
    <>
    
    <Slider slides={slides_1}/>
      <FlowerList/>
    <Slider slides={slides_2}/>
      

</>
)

}

export default Home;