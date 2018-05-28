import React, {Component} from 'react';
import { Menu} from 'antd';
import {Icon} from 'react-fa'
import logo from '../images/az02.png';
import { Link } from 'react-router-dom'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;




class NavBar extends Component {
    state = {
        current: 'logo',
        catalog:" A-Z Experiences",
        books:" Books",
        logout:false
    }

    componentWillMount

        //funciones de botones
            handleClick = (e) => {
            console.log('click ', e);
            this.setState({
            current: e.key,
            });
            }

            catalogClick = (e) =>{
            this.setState({
                    catalog:e.key,
                    books:"Books"
                })}

            booksClick = (e) =>{
                    this.setState({
                        books:e.key,
                        catalog:" A-Z Experiences"
                })}



            logoFunction =()=>{
                this.setState({
                    books:"Books",
                    catalog:" A-Z Experiences"
                })
            }
            aboutMeFunction =()=>{
                this.setState({
                    books:"Books",
                    catalog:" A-Z Experiences"
                })
            }

            contactMeFunction =()=>{
                this.setState({
                    books:"Books",
                    catalog:" A-Z Experiences"
                })
            }
            placesFunction =()=>{
                this.setState({
                    books:"Books",
                    catalog:" A-Z Experiences"
                })
            }




  
  
    render() {
        return (
            <div style={{position:"fixed", zIndex:'9999'}}>
        
                    <Menu
                        onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                        mode="horizontal"
                        style={{ display:"flex",width:"100%", backgroundColor:"white" , position:"fixed" ,flexWrap:"wrap"}}
                    >

                        <Menu.Item key="logo">
                        <Link to='/'><img onClick={this.logoFunction} style={{width:"100px"}} src={logo} alt="azlogo.png"/></Link>
                        </Menu.Item>
                    
                        <Menu.Item link onClick={this.aboutMeFunction} key="Aboutme">
                           <Link to='/about'> <Icon name="user" />About Me </Link>
                        </Menu.Item>

                        <SubMenu title={<span><Icon name="angle-down"/>{this.state.catalog}</span>}>
                            <MenuItemGroup  title="A-Z EXPERIENCES"> 
                                <Menu.Item onClick={this.catalogClick} key="Top Posts">Top Posts</Menu.Item>
                                <Menu.Item onClick={this.catalogClick} key="New Posts">New Posts</Menu.Item>
                                <Menu.Item onClick={this.catalogClick} key="Monthly Best">Monthly Best</Menu.Item>
                            </MenuItemGroup>
                        </SubMenu>
                        <SubMenu title={<span><Icon name="angle-down" />{this.state.books}</span>}>
                            <MenuItemGroup  title="BOOKS">
                                <Menu.Item onClick={this.booksClick} key="Reading Now">Reading Now</Menu.Item>
                                <Menu.Item onClick={this.booksClick} key="Favorite Books">Favorite Books</Menu.Item>
                                <Menu.Item onClick={this.booksClick} key="All Books">All Books</Menu.Item>

                            </MenuItemGroup>
                        </SubMenu>

                        <Menu.Item onClick={this.placesFunction} key="places">
                           <Link to='/places'> <Icon name="globe" /> Places</Link>
                        </Menu.Item>

                        <Menu.Item onClick={this.contactMeFunction} key="contacMe">
                            <Link to='/contact' > <Icon name="envelope" /> Contact Me</Link>
                        </Menu.Item>

                        <Menu.Item  key="logOut">
                            <Icon name="power-off" />Log Out
                        </Menu.Item>
                    
                    </Menu>
        </div>
        );
    }
}

export default NavBar;