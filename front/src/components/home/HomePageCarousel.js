import React from 'react';
import { Carousel } from 'antd';





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
