import React , {Component} from 'react';
import {MonthlyBestEntry} from './MonthlyBestEntry'
import {getEntries} from '../../../../services/entryServices'


const sectionStyle = {
    display: "flex",
    flexDirection: "column",
    backgroundColor:"white",
    width:"100%"
  };


class MonthlyBest extends Component{
    state={
        entries:[]
    }

    componentWillMount(){
        getEntries()
        .then(entries=>{
            this.setState({entries})
        })
        .catch(e=>console.log(e))
    }


    render(){
        return(

            <div style={{width:"700px", margin:"3%"}}>
            <section style={sectionStyle}>

                <h2 style={{margin:"2%"}}>Monthly Best</h2>

                <div style={{display:"flex",flexDirection:"row", flexWrap:"wrap", justifyContent:"space-around"}} >
                    {this.state.entries.map(entry=>{
                        return (
                        <MonthlyBestEntry {...entry} key={entry._id}/>
                        )
                    })}
                </div>
            </section> 
            </div>
 
        )
    }
}

export default MonthlyBest;