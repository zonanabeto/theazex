import React from 'react';
import HomePageContainer from './components/home/HomePageContainer';
import aboutMeContainer from './components/aboutMe/aboutMeContainer ';
import PlacesContainer from './components/places/PlacesContainer';
import ContactContainer from './components/contact/ContactContainer';
import {Switch , Route} from 'react-router-dom';

export const Routes =() =>{
    return(
        <Switch>
            <Route exact path='/' component={HomePageContainer} />
            <Route path='/about' component = {aboutMeContainer}/> 
            <Route path='/places' component={PlacesContainer}/>
            <Route path='/contact' component={ContactContainer} />
        </Switch>

    )

}