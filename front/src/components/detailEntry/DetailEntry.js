import React, {Component} from 'react';
import {getSingleItem} from '../../services/entryServices';
import img from '../../images/abstract-astro-astronomy-956999.jpg'

class DetailEntry extends Component{

    state={
        id:null,
        entry:{}

    }

    componentWillMount(){
        const id = this.props.match.params.id;
        this.setState({id});
        getSingleItem(id)
        .then(entry=>{
            this.setState({entry})
        })
        .catch(e=>alert(e))
    }


    render(){
        const {entry} = this.state;
        return(
            <div>
                <img  style={{height:"200px", width:"100%"}} src={entry.img ? "http://localhost:3000/" + entry.img : img} alt={entry.title + ' image.jpg'}/>
                <h1>{entry.title}</h1>
                <span>{entry.title}</span>
                <br/>
                <p>{entry.body}</p>
            </div>
        )
    }


}

export default DetailEntry