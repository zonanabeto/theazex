import React ,{Component} from 'react';
import {Mapa} from "./Mapa";
import { Card } from 'antd';
import background from '../../images/blue-ocean-rain-37487.jpg';
import {getEntries} from '../../services/entryServices';



const sectionStyle = {
    display:"flex",
    alignItems:"center",
    justifyContent:"space-around",
    backgroundImage:`url('${background}')`,
    backgroundSize:'cover',
    width:"100%",
    heigth:"auto",
    paddingBottom:"2%"
  };

class MapContainer extends Component{

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
            <div>
                <section style={sectionStyle}>
                    <Card title="Places" style={{ width:"80%", margin:"50px" }}>
                        <Mapa isMarkerShown/>
                    </Card>
                </section>
            </div>
        )
    }
}

export default MapContainer