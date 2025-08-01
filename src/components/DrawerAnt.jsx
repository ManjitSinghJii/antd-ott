import { CloseCircleFilled, HomeFilled, OpenAIOutlined } from '@ant-design/icons'
import { Button, Drawer } from 'antd'
import { icons } from 'antd/es/image/PreviewGroup'
import React, { useState } from 'react'
import ModelAnt from './ModelAnt'

const DrawerAnt = () => {
    const [open, setOpen] = useState(false)
  return (
    <div className='bg-gradient-to-r from-purple-100 via-pink-100 to-red-100 h-screen'>
        <div className='min-h-screen flex justify-center items-center'>
            <Button icon={<OpenAIOutlined/>} size='large' type='primary' onClick={()=>setOpen(true)} >Open Drawer</Button>
            <Drawer
                open={open}
                onClose={()=> setOpen(false)}
                maskClosable={false}
                // width={720}
                width={"40%"}
                title={<h1 className='text-indigo-700 font-medium text-xl'>Title Manjit</h1>}
                extra={[
                    <div className='space-x-8'>
                        <Button onClick={()=> setOpen(false)} icon={<CloseCircleFilled/>} />
                        <Button icon={<HomeFilled/>} />
                    </div>
                ]}
                placement='left'
                // height={"100%"}
            >
                <div>
                    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, incidunt.</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum est reiciendis quidem sed hic natus! Magnam accusamus totam illum excepturi.</p>
                    
                </div>
            </Drawer>
        </div>
    </div>
  )
}

export default DrawerAnt