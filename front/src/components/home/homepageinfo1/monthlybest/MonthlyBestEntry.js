import React from 'react';
import { Card, Avatar } from 'antd';
import {Link} from 'react-router-dom';
import {Icon} from 'react-fa';

const { Meta } = Card;




export const MonthlyBestEntry = ({title , description , body,img, _id}) =>{
 
    return(
        <div >
            <article>
            <Card
            style={{ width: "300px", marginBottom:"5%" }}
            cover={  <Link to={"/entry/" + _id} ><img  alt="example" src={img ? "http://localhost:3000"+img : "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" }/></Link>}
            actions={[<Icon style={{fontSize:"30px"}} name="twitter" />, <Icon style={{fontSize:"30px"}} name="facebook-square" />, <Icon style={{fontSize:"30px"}} name="instagram" />]} >
                <Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={ title ? <Link to={"/entry/" + _id}> {title} </Link>: "No title available"}
                description={description ? description : "No description available" }
                />
            </Card>
            </article>
        </div>
    )
}