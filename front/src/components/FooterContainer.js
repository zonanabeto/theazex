import React, {Component} from 'react';
import {Icon} from 'react-fa';
import {Link} from 'react-router-dom';

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
const liStyle2 = {
    color:"#ffffff",
    listStyleType:"none",
    fontSize:"20px",
    margin:"5px"

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
                    <li style={liStyle2}> <a style={{color:"#ffffff"}} href="https://www.facebook.com/theazexperience/"> <Icon style={{fontSize:"40px"}} name="facebook-square" /> </a></li>
                    <li style={liStyle2}> <a style={{color:"#ffffff"}} href="https://www.instagram.com/theazexperience/"><Icon style={{fontSize:"40px"}} name="instagram" /> </a> </li>
                    <li style={liStyle2}><Icon style={{fontSize:"40px"}} name="twitter" /></li>
                    <li style={liStyle2}><Icon style={{fontSize:"40px"}} name="medium" /></li>
                </ul>
                <ul style={{display:"flex", flexDirection:"column", justifyContent:"space-around"}}>
                    <li style={liStyle}>Colaborations</li>
                    <li style={liStyle}>Pictures</li>
                    <li style={liStyle}><Link to="/login">Log In</Link></li>
                </ul>
            </div>
        );
    }
}

export default FooterContainer;