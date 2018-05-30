import React, {Component} from 'react';
import { Menu } from 'antd';
import {Icon} from 'react-fa';
import {logout} from '../../services/authServices';
import {Link} from 'react-router-dom';
const SubMenu = Menu.SubMenu;



class AdminNavBar extends Component{

    state = {
        user:{}
    }



    componentWillMount(){
            //if(!localStorage.getItem("user")) return this.props.history.push('/');
            if(localStorage.getItem("user")){
              let user = localStorage.getItem("user");
              this.setState({user})
              return;
            }
    }


 // submenu keys of first level
 rootSubmenuKeys = ['sub1', 'sub2', 'sub3'];
 state = {
   openKeys: ['sub1'],
 };
 onOpenChange = (openKeys) => {
   const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
   if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
     this.setState({ openKeys });
   } else {
     this.setState({
       openKeys: latestOpenKey ? [latestOpenKey] : [],
     });
   }
 }

logoutClick = ()=>{
    logout()
    .then(res=>{
      localStorage.removeItem("user");
      this.setState({user:{}});
    })
    window.location.reload();
}

 render() {
     const {user} = this.state;
   return (
     <div  style={ user? { display:"block"}:{display:"none"} } >
     <Menu
       mode="inline"
       openKeys={this.state.openKeys}
       onOpenChange={this.onOpenChange}
       style={{ width: 256 }}
     >
       <SubMenu key="sub1" title={<span><Icon name="edit" /><span>Write</span></span>}>
         <Menu.Item key="1"><Link to="/admin/new">Entry</Link></Menu.Item>
         <Menu.Item key="2">Quote</Menu.Item>
       </SubMenu>
       <SubMenu key="sub2" title={<span><Icon name="cog" /><span>General</span></span>}>
         <Menu.Item key="3">Post List</Menu.Item>
         <Menu.Item key="4">Social Analitics</Menu.Item>
       </SubMenu>
       <SubMenu key="sub3" title={<span><Icon name="user" /><span>User</span></span>}>
         <Menu.Item  key="5"><p onClick={this.logoutClick} >Log Out</p></Menu.Item>
       </SubMenu>
     </Menu>
     </div>
   );
 }
}

export default AdminNavBar;