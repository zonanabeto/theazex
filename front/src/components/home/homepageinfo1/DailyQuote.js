import React from 'react';
import { Card } from 'antd';
import mia from '../../../images/mia.JPG';



const style = {
    marginTop:"3%",
    width:"500px",
    display: "flex",
    flexDirection: "column"
  };

export const DailyQuote = () =>{
 
    return(
        <div style={style}>
            <article style={{marginBottom:"5%"}}>
            <Card title="Daily" bordered={true} style={{ width:"100%" }}>
                <p>Image</p>
                <p>Body</p>
                <p>Source</p>
                <p>Tags</p>
            </Card>
            </article>
            <article>
            <Card title="What is the A-Z Experience" bordered={true} style={{ width:"100%" }}>
                <img style={{width:"100%"}} src={mia} alt="imagen mia.jpg"/>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Dolores sint et magni? Nam aspernatur dicta, non sunt inventore nulla 
                     odio nihil perspiciatis. Totam, doloremque. Fugit quas quidem dolore
                      obcaecati laborum!  </p>

            </Card>
            </article>
        </div>
    )
}