import { DeleteFilled, EditOutlined } from '@ant-design/icons'
import { Button, Skeleton, Spin, Table, Tag } from 'antd'
import React from 'react'

const TableAnt = () => {

    const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        description: "Noise-cancelling over-ear headphones with 40-hour battery life.",
        price: 199.99,
        image: "/images/headphones.jpg",
        category: "Electronics",
        stock: 25,
        rating: 4.5
    },
    {
        id: 2,
        name: "Smartwatch Series 8",
        description: "Fitness tracker with heart rate, GPS, and sleep monitor.",
        price: 149.99,
        image: "/images/smartwatch.jpg",
        category: "Wearables",
        stock: 15,
        rating: 4.2
    },
    {
        id: 3,
        name: "Organic Green Tea",
        description: "100% organic green tea leaves, packed for freshness.",
        price: 9.99,
        image: "/images/greentea.jpg",
        category: "Groceries",
        stock: 100,
        rating: 4.8
    },
    {
        id: 4,
        name: "LED Desk Lamp",
        description: "Adjustable LED lamp with touch control and 3 brightness levels.",
        price: 29.99,
        image: "/images/desk-lamp.jpg",
        category: "Home",
        stock: 40,
        rating: 4.4
    }]

    const columns = [
        {
            title: "Title",
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: "Price",
            dataIndex: 'price',
            key: 'price'
        },
        {
            title: "Description",
            key: 'description',
            render: (item)=> (
                <label className='text-sm font-medium text-gray-600'>{item.description} </label>
            )
        },
        {
            title: "Stock",
            key: 'stock',
            render: (item)=> (
                <label>{item.stock} </label>
            )
        },
        {
            title: "Category",
            key: 'category',
            render: (item)=> (
                <Tag color='cyan-inverse' >{item.category} </Tag>
            )
        },
        {
            title: "Action",
            key: 'action',
            render: (item)=> (
                <div className='space-x-4'>
                    <Button  type='primary' icon={<EditOutlined/>} />
                    <Button type='primary' danger icon={<DeleteFilled/>} />
                </div>
            )
        },
        
    ]
  return (
    <div className="bg-amber-50 min-h-screen" >
        <div className='p-10 bg-blue-100'>
            <Skeleton/>
            
            <Spin size='large'/>

            <Table
                columns={columns}
                dataSource={products}
                pagination={false}
                rowKey="id"
            >

            </Table>
        </div>
    </div>
  )
}

export default TableAnt