import { DashboardFilled, DeleteFilled, DeleteOutlined, EditOutlined, HomeOutlined } from '@ant-design/icons'
import { Button, Card } from 'antd'
import React from 'react'

const CardAnt = () => {
  return (
    <div className='h-screen bg-gradient-to-r from-pink-50 via-red-50 to-yellow-50'>
        <div className='grid grid-cols-3 gap-10 p-10'>
            {/* <Card 
                hoverable
                extra={<Button icon={<DashboardFilled />} />}
                className='w-[30%] '
            >
                <div className='flex justify-center items-center gap-8'>
                    <h1 className='text-2xl font-medium text-gray-800'>Manjit Singh</h1>
                    <Button 
                        className='!bg-gradient-to-r !from-pink-400 !via-red-300 !to-yellow-600'
                        type='primary'
                        size='large'
                    >
                        Submit
                    </Button>
                </div>
            </Card> */}

           {
            Array(2).fill(0).map((items, index)=> (
                 <Card
                    key={index}
                    cover={<img src='./img.jpeg' alt='cover'/>}
                    hoverable
                    actions={[
                        <Button><EditOutlined/></Button>,
                        <Button danger ><DeleteOutlined/></Button>,
                        <Button><HomeOutlined/></Button>
                    ]}
                >
                    <Card.Meta
                        title={<h1 className='text-xl text-zinc-600'>My self manjit singh</h1>}
                        description={
                            <div>
                                <div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta at laborum voluptatem, nam aliquid quos!</p>
                                </div>
                                <div className='flex justifi-center items-center gap-4'>
                                    <p className='font-medium'>199</p>
                                    <del className='font-bold text-red-500'>499</del>
                                </div>
                                <p className='text-xl font-medium text-blue-500'>ye Array se aa raha hai {items} </p>
                            </div>
                        }
                    >
                        
                    </Card.Meta>
                </Card>
            ))
           }
        </div>
    </div>
  )
}

export default CardAnt