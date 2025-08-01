import React, { useState } from 'react'
import { Button, Modal } from 'antd'
import { HomeFilled, OpenAIOutlined } from '@ant-design/icons'

const ModelAnt = () => {
    const [open, setOpen] = useState(false)
  return (
    <div className='bg-gradient-to-r from-blue-100 via-cyan-100 to-teal-100 min-h-screen'>
        <div className='h-screen flex justify-center items-center'>
            <Button size='large' type='primary' icon={<OpenAIOutlined/>} onClick={()=> setOpen(true)}>Open Model</Button>
            <Modal
                open={open}
                title={<h1>REjister now</h1>}
                onOk={()=> alert("on Ok")}
                onCancel={()=> setOpen(false)}
                maskClosable={false}
                // footer={null}
                // width={1000}
                width={"80%"}
                centered
            >

                <div className='space-y-10'>
                    <div className='p-8'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem alias inventore eos. Deserunt maxime ad perferendis sapiente harum dolorem sed debitis accusantium expedita illo tempora, atque, a fugit quaerat illum unde architecto. Ad, beatae! Iusto magnam molestiae illo sapiente eos, qui odit incidunt quibusdam? Laudantium.
                    </div>
                    <p className='text-amber-700'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis vero soluta esse?
                    </p>
                    <Button icon={<HomeFilled/>} type='text'>Home</Button>
                </div>
            </Modal>
        </div>
    </div>
  )
}

export default ModelAnt