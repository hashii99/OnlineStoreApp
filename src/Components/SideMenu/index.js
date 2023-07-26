import { Menu } from "antd";
import { AppstoreOutlined } from '@ant-design/icons';
import { ShopOutlined } from '@ant-design/icons';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { UserOutlined } from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect,  useState } from "react";


function SideMenu() {
    const location = useLocation();
    const [selectedKeys, setSelectedKeys] = useState("/")

    useEffect(() => {
        const pathName = location.pathname;
        setSelectedKeys([pathName])
    }, [location.pathname])

    const navigate = useNavigate();

    return <div className="SideMenu">
        <Menu 
        className="SideMenuVertical"
        mode="vertical"
        onClick={(item) => {
            // item.key
            navigate(item.key);
        }}
        selectedKeys = {[selectedKeys]}
        items={[
            {
                label:"Dashboard",
                icon:<AppstoreOutlined />,
                key: '/',
            },
            {
                label:"Inventory",
                icon: <ShopOutlined />,
                key: '/inventory',
            },
            {
                label:"Orders",
                icon: <ShoppingCartOutlined />,
                key: '/orders',
            },
            {
                label:"Customers",
                icon: <UserOutlined />,
                key: '/customers',
            },
        ]}
        ></Menu>
    </div>
}

export default SideMenu;