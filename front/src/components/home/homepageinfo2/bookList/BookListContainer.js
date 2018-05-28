import React , {Component} from 'react';
import {Book} from './Book';
import {getEntries} from '../../../../services/entryServices';



const sectionStyle = {
    display: "flex",
    flexDirection: "column",
    alignContent:"center",
    backgroundColor:"white",
    width:"100%"
  };


class BookListContainer extends Component{
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

            <div style={{width:"350px", margin:"3%"}}>
                <section style={sectionStyle}>

                    <h2 style={{margin:"2%"}}>Book List</h2>

                    <div style={{alignItems:"center",display:"flex",flexDirection:"column", flexWrap:"wrap", justifyContent:"space-around"}} >
                        {this.state.entries.map(entry=>{
                            return (
                            <Book {...entry} key={entry._id}/>
                            )
                        })}
                    </div>
                </section> 
            </div>
        )
    }
}

export default BookListContainer;