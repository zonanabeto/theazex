import React from 'react';
import { Card, Icon, Avatar } from 'antd';
const { Meta } = Card;



export const Book = ({title , description , body,img}) =>{
 
    return(
        <div >
            <article>
            <Card
            style={{ width: "300px", marginBottom:"5%" }}
            cover={<img  alt="example" src={img ? "http://localhost:3000"+img : "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" }/>}
            actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]} >
                <Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={ title ? title : "No title available"}
                description={description ? description : "No description available" }
                />
            </Card>
            </article>
        </div>
    )
}