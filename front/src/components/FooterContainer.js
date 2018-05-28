import React, {Component} from 'react';
import {Icon} from 'react-fa'

const footerStytle ={
    backgroundColor:"#086788",
    display:"flex",
    flexWrap:"wrap",
    justifyContent:"space-around"
}

const liStyle = {
    color:"#ffffff",
    listStyleType:"none",
    fontSize:"20px"

}


class FooterContainer extends Component {

    render() {
        return (
            <div style={footerStytle}>
                <ul style={{display:"flex", flexDirection:"column", justifyContent:"space-around"}} >
                    <li style={liStyle}>About Me</li>
                    <li style={liStyle}>All Posts</li>
                    <li style={liStyle}>All Books</li>
                    <li style={liStyle}>All places</li>
                    <li style={liStyle}>Contact Me</li>
                </ul>
                <ul style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-around"}} >
                    <li style={liStyle}> <a style={{color:"#ffffff"}} href="https://www.facebook.com/theazexperience/"> <Icon style={{fontSize:"40px"}} name="facebook-square" /> </a></li>
                    <li style={liStyle}> <a style={{color:"#ffffff"}} href="https://www.instagram.com/theazexperience/"><Icon style={{fontSize:"40px"}} name="instagram" /> </a> </li>
                    <li style={liStyle}><Icon style={{fontSize:"40px"}} name="twitter" /></li>
                </ul>
                <ul style={{display:"flex", flexDirection:"column", justifyContent:"space-around"}}>
                    <li style={liStyle}>Colaborations</li>
                    <li style={liStyle}>Pictures</li>
                </ul>
            </div>
        );
    }
}

export default FooterContainer;