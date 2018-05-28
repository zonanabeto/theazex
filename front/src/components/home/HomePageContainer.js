import React , {Component} from 'react';
import {HomePageCarousel} from './HomePageCarousel';
import HomePageInfo1Container from './homepageinfo1/HomePageInfo1Container';
import HomePageInfo2Container from './homepageinfo2/homePageInfo2Container'



class HomePageContainer extends Component{
    render(){
        return(
            <div style={{display:"flex" , flexDirection:"column"}}>
                <HomePageCarousel />
                <HomePageInfo1Container/>
                <HomePageInfo2Container/>
            </div>
        )
    }
}

export default HomePageContainer;