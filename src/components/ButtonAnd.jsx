import { HomeOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React, { useState } from 'react'

const ButtonAnd = () => {
    const [loading, setLoading] = useState(false)

    const submit = ()=> {
        setLoading(true)
        
        setTimeout(()=>{
            setLoading(false)
        },5000)
    }
  return (
    <div className='h-screen bg-gradient-to-r from-pink-200 via-red-100 to-yellow-100'>
        <div className='flex items-center justify-center min-h-screen flex-col'>
            <Button
                size='large'
                type='primary'
                danger={loading}
                loading={loading}
                icon={<HomeOutlined/>}
                iconPosition='end'
                htmlType='button'
                onClick={submit}     
            >
                Click me
            </Button>
        </div>
    </div>
  )
}

export default ButtonAnd