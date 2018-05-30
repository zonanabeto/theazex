import React from 'react';
import HomePageContainer from './components/home/HomePageContainer';
import aboutMeContainer from './components/aboutMe/aboutMeContainer ';
import PlacesContainer from './components/places/PlacesContainer';
import ContactContainer from './components/contact/ContactContainer';
import DetailEntry from './components/detailEntry/DetailEntry';
import Draft from './components/draft/Draft';
import AdminContainer from './components/admin/AdminContainer';
import NewEntry from './components/admin/NewEntry';
import LoginContainer from './components/auth/LoginContainer';
import {Switch , Route} from 'react-router-dom';


export const Routes =() =>{
    return(
        <Switch>
            <Route exact path='/' component={HomePageContainer} />
            <Route path='/about' component = {aboutMeContainer}/> 
            <Route path='/places' component={PlacesContainer}/>
            <Route path='/contact' component={ContactContainer} />
            <Route path='/entry/:id' component={DetailEntry} />
            <Route path='/draft' component={Draft}/>
            <Route path='/login'component={LoginContainer}/>
            <Route path='/admin/new' component={NewEntry}/>
            <Route path='/admin' component={AdminContainer}/>
           
        </Switch>

    )

}