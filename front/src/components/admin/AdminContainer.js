import React, {Component} from 'react';


class AdminContainer extends Component{

    componentWillMount(){
        if(!localStorage.getItem("user")) return this.props.history.push('/');


    }
    render(){
        return(
            <div>
               
            </div>
        )
    }
}

export default AdminContainer;