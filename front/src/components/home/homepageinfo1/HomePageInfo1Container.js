import React , {Component} from 'react';
import {DailyQuote} from './DailyQuote';
import MonthlyBest from './monthlybest/MonthlyBest';
import background from '../../../images/board-bright-design-235994.jpg';
import {getQuotes} from '../../../services/quoteServices';


const sectionStyle = {
    display: "flex",
    flexDirection: "row",
    flexWrap:"wrap",
    justifyContent:"space-around",
    backgroundImage:`url('${background}')`,
    heigth:"auto",
    paddingBottom:"2%"
  };

  

class HomePageInfo1Container extends Component{
    state={
        quotes:[]
    }

    componentWillMount(){
        getQuotes()
        .then(quotes=>{
            this.setState({quotes})
        })
        .catch(e=>console.log(e));
    }


    render(){
        return(
            <div>
                <section style={sectionStyle}>
                    <DailyQuote/>

                    <MonthlyBest/>
                </section> 
            </div>
        )
    }
}

export default HomePageInfo1Container;