import React, {Component} from 'react';
import {addEntry,getEntries} from '../../services/entryServices';
import {Link} from 'react-router-dom';


class NewEntry extends Component{
    state={
        entries:[],
        newEntry: {}
    }



    componentWillMount(){
        getEntries()
        .then(entries=>{
            this.setState({entries})
        })
        .catch(e=>console.log(e))
    }

    handleChange = (e)=>{
        const field = e.target.name;
        const value = e.target.value;
        const {newEntry}= this.state;
        newEntry[field] = value;
        this.setState({newEntry});
        console.log(this.state.newEntry)
    }
    

    submitForm = (e) =>{
        e.preventDefault();
        //Aqui subo al backend
        /*const newEntry ={
            published: e.target.published.value,
            title: e.target.title.value,
            body: e.target.body.value,
            author:e.target.author.value,
            img:e.target.cover.files[0],
            description:e.target.description.value,
            category:e.target.description.value
        }*/

        addEntry(this.state.newEntry)
        .then(newEntry=>{
            const {entries} = this.state;
            entries.push(newEntry)
            this.setState({entries})
        })
        .catch(e=>alert(e))

        console.log(this.state.newEntry)
    }
    

    render(){
        const {entries} =this.state;


        return(
            <div>
                <br/><br/>
                {entries.map(e=>{
                return(
                <Link to={"/entry/" + e._id} >
                    <div key={e._id} >{e.title}</div>
                </Link>
                )
            })}
                <br/><br/>
                    <h2>Submit new Entry</h2>
                <form onSubmit={this.submitForm} >

                    <label >Published: </label>
                    <input type="checkbox" name="published" onChange={this.handleChange} />
                    <br/><br/>
                    <input type="text" name="title" placeholder="Titulo" onChange={this.handleChange}/>
                    <br/><br/>
                    <input type="text" name="description" placeholder="Description or Subtitle" onChange={this.handleChange} />
                    <br/><br/>
                    <input type="text" name="author" placeholder="Autor" onChange={this.handleChange}/>
                    <br/><br/>
                    <textarea name="body" placeholder="Body"  cols="30" rows="10" onChange={this.handleChange}></textarea>
                    <br/><br/>
                    <input type="file" name="cover" />
                    <br/><br/>
                    <label htmlFor="">Category</label>
                    <br/>
                    <select name="category" onChange={this.handleChange}>
                        <option value="Place">Place</option>
                        <option value="Book">Book</option>
                        <option value="Quote">Quote</option>
                    </select>
                    <br/><br/>
                    <input type="submit" value="submit"/>
                </form>
                <br/><br/>
            </div>

        )
    }

}

export default NewEntry
