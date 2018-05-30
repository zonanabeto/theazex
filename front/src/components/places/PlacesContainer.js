import React ,{Component} from 'react';
import PlacesPosts from './PlacesPosts';
import MapContainer from './MapContainer';


class PlacesContainer extends Component{



    render(){
        return(
            <div style={{display:"flex", flexDirection:"column", justifyItems:"center"}} >
                <MapContainer/>
                <PlacesPosts/>
            </div>
        )
    }
}

export default PlacesContainer