import React from 'react';
import { Carousel } from 'antd';
import background1 from '../../images/20171203_065949.jpg';
import background2 from '../../images/20171230_171624.jpg';
import background3 from '../../images/IMG_0513.JPG';




export const HomePageCarousel = () =>{
 
    return(
        <div>
        <Carousel autoplay>
            {/* <div style={{height:"100%"}}> <img src={background1}  style={{height:"100px"}} alt="image1.jpg"/></div> */}
            <div ><h3>Como</h3></div>
            <div  ><h3>Estas</h3></div>
        </Carousel>
        </div>
    )
}
