import {
  DashboardOutlined,
  ProductFilled,
  PayCircleFilled,
  UserOutlined,
  ShoppingCartOutlined,
  SettingFilled,
  BarChartOutlined,
  MessageOutlined,
  FileTextOutlined,
  HomeFilled,
  HomeTwoTone,
  CloseCircleFilled
} from "@ant-design/icons";

import { Button, Card, Layout, Menu } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const { Sider } = Layout

const AdminLayout = () => {
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()

    const menus = [
    {
        icon: <DashboardOutlined />,
        label: "Dashboard",
        key: "/"
    },
    {
        icon: <ProductFilled />,
        label: "Products",
        key: "/products"
    },
    {
        icon: <ShoppingCartOutlined />,
        label: "Orders",
        key: "/orders"
    },
    {
        icon: <PayCircleFilled />,
        label: "Payment",
        key: "/payment"
    },
    {
        icon: <UserOutlined />,
        label: "Customers",
        key: "/customers"
    },
    {
        icon: <BarChartOutlined />,
        label: "Reports",
        key: "/reports"
    },
    {
        icon: <MessageOutlined />,
        label: "Messages",
        key: "/messages"
    },
    {
        icon: <FileTextOutlined />,
        label: "Invoices",
        key: "/invoices"
    },
    {
        icon: <SettingFilled />,
        label: "Settings",
        key: "/settings",
        children: [
            {
                icon: <HomeFilled/>,
                label: "Home",
                key: "home"
            },
            {
                icon: <BarChartOutlined />,
                label: "Reports",
                key: "reports2"
            },
            {
                icon: <MessageOutlined />,
                label: "Messages",
                key: "messages2",
                children: [
                    {
                        icon: <HomeTwoTone/>,
                        label: "Chating",
                        key: "chat"
                    }
                ]
            },
        ]
    }
    ];

    const clickHandlear = (menu)=> {
        navigate(menu.key)
    }
  return (
    <div className='min-h-screen'>
        <Layout className='h-screen' >
            {/* <Layout.Sider></Layout.Sider> */}
            <Sider 
                className='h-full'
                collapsed={open}
                // collapsible
                // onCollapse={()=> setOpen(!open)}
                collapsedWidth={0}
            >
                <Menu 
                    items={menus} 
                    className='h-full' 
                    theme='light' 
                    defaultSelectedKeys={["products"]}
                    onClick={clickHandlear}
                />
            </Sider>
            <Layout>
                <Layout.Header>
                    <div className="flex justify-between items-center h-full">
                        <h1 className="text-xl font-medium text-white">MAnjit Singh</h1>
                        <Button icon={<CloseCircleFilled/>} onClick={()=> setOpen(!open)} />
                    </div>
                </Layout.Header>
                <Layout.Content className='p-16 bg-gray-300'>
                    <div className='grid lg:grid-cols-4 gap-4'>
                        {
                            Array(12).fill(0).map((item, index)=> (
                                <Card key={index} hoverable>
                                    <Card.Meta
                                        title="Dummy text"
                                        description='hello manjit singh'
                                    >
                                        
                                    </Card.Meta>
                                </Card>
                            ))
                        }
                    </div>
                </Layout.Content>
            </Layout>
        </Layout>
    </div>
  )
}

export default AdminLayout