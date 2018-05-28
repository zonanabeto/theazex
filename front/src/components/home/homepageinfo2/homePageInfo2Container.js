import React , {Component} from 'react';
import background from '../../../images/blue-ocean-rain-37487.jpg';
import NewEntriesContainer from './newEntries/NewEntriesContainer';
import TopEntriesContainer from './topEntries/TopEntriesContainer';
import BookListContainer from './bookList/BookListContainer';




const sectionStyle = {
    display: "flex",
    flexDirection: "row",
    flexWrap:"wrap",
    justifyContent:"space-around"
  };

  const divStyle ={
    backgroundImage:`url('${background}')`,
    backgroundSize:'cover'
  }
  

class HomePageInfo2Container extends Component{


    render(){
        return(
            <div style={divStyle}>
                <section style={sectionStyle}>
                    <NewEntriesContainer/>
                    <TopEntriesContainer/>
                    <BookListContainer/>
                </section> 
            </div>
        )
    }
}

export default HomePageInfo2Container;