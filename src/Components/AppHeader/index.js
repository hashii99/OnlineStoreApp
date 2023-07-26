import React, { useEffect, useState } from 'react';
import { Badge, Image, Typography, Space, Drawer} from 'antd';
import { MailOutlined, BellFilled } from '@ant-design/icons';
import { getComments, getOrders } from '../../API';
// import { List } from 'rc-field-form';
import { List } from 'antd';


function AppHeader() {
    const [comments, setComments] = useState([]);
    const [orders, setOrders] = useState([]);
    const [commentsOpen, setCommentsOpen] = useState(false)
    const [notificationsOpen, setNotificationsOpen] = useState(false)

    useEffect(() => {
        getComments().then((res) => {
        setComments(res.comments);
        });
        getOrders().then((res) => {
        setOrders(res.products);
        });
    }, []);

    return <div className="AppHeader">
        <Image width={40} 
        src="https://dog-house.ae/wp-content/uploads/2023/05/dog-house-Logo-designing-selected-19-02-2020-01-2.png.png">
        </Image>

        <Typography.Title>Dashboard</Typography.Title>
        <Space>
            <Badge count={comments.length} dot>
                <MailOutlined style={{ fontSize: 24 }} onClick={()=> {
                    setCommentsOpen(true);
                }} />
            </Badge>
            <Badge count={orders.length}>
                <BellFilled style={{ fontSize:24 }}  onClick={()=> {
                    setNotificationsOpen(true);
                }}/>
            </Badge>
        </Space>

        <Drawer 
            title="Comments" 
            open={commentsOpen} 
            onClose={() => {
            setCommentsOpen(false)
        }} 
        maskClosable>
            <List dataSource={comments}
                renderItem={(item) => {
                    return <List.Item>{item.body}</List.Item>;
                }}
            ></List>
        </Drawer>

        <Drawer 
            title="Notifications" 
            open={notificationsOpen} 
            onClose={() => {
            setNotificationsOpen(false)
        }} 
        maskClosable>
            <List dataSource={orders}
                renderItem={(item) => {
                    return <List.Item><Typography.Text strong>{item.title} has been ordered!</Typography.Text>{" "}</List.Item>;
                }}
            ></List>

        </Drawer>


    </div>
}

export default AppHeader;