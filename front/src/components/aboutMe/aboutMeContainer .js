import React, {Component} from 'react';
import { Card } from 'antd';
import mia from '../../images/mia.JPG'
import background from '../../images/conifers-environment-fir-trees-1034568.jpg'

const divStyle ={
    backgroundImage:`url('${background}')`,
    backgroundSize:'cover',
    display:"flex",
    flexWrap:"wrap",
    flexDirection:"column",
    alignItems:"center"
    }

const tabList = [{
    key: 'tab1',
    tab: 'Who?',
  }, {
    key: 'tab2',
    tab: 'tab2',
  }];
  
  const contentList = {
    tab1: <div><h2>Who?</h2> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi expedita
       , accusantium architecto, quaerat voluptatibus numquam aliquam illum est
         culpa accusamus id deleniti ullam, ea esse vero eligendi minus rem veniam.</p></div>,
    tab2: <p>content2</p>,
  };



class aboutMeContainer extends Component{

    state = {
        key: 'tab1'
      }
      onTabChange = (key, type) => {
        console.log(key, type);
        this.setState({ [type]: key });
      }


    render(){
        return(
            <div style={divStyle} >
                <div style={{width:"800px", margin:"30px"}} >
                    <Card
                        style={{ width: '100%'}}
                        title="About Me"
                        tabList={tabList}
                        onTabChange={(key) => { this.onTabChange(key, 'key'); }}
                        >
                        <div><img style={{width:'500px'}} src={mia} alt="mia.jpg"/></div>
                        {contentList[this.state.key]}
                    </Card>
                </div>
            </div>
        )
    }
}

export default aboutMeContainer;