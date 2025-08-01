import { DeleteFilled, HolderOutlined, HomeFilled } from '@ant-design/icons'
import { Button, Checkbox, Form, Input, InputNumber, Select } from 'antd'
import React from 'react'

const FormAnt = () => {

    const signup = (values)=> {
        console.log(values)
        // signupForm.resetFields()  // reset form
        // signupForm.setFieldValue({
        //     address: "data save ho gaya or apdate bhi"
        // })
    }
    const [signupForm] = Form.useForm()
  return (
    // <div className='bg-gradient-to-r from-green-100 via-emerald-100 to-lime-100 h-screen'></div>
    <div className='bg-gradient-to-r from-gray-800 to-zinc-800 h-screen'>
        <div className='flex justify-center items-center min-h-screen'>
            <div className='bg-white p-6 w-[80%] rounded-xl shadow'>
                <Form 
                    className='grid grid-cols-2 gap-6' 
                    layout='vertical' 
                    onFinish={signup} 
                    form={signupForm}
                    // initialValues={{name: "manjit", email: "manjit@gmail.com"}}
                >
                    <div className=''>
                        <Form.Item
                            name="name"
                            label={<h1 className='text-lg font-medium'>Full Name</h1>}
                            rules={[{
                                required: true,
                            }]}
                        >
                            <Input size='large' placeholder='Enter Name' prefix={<Button icon={<HomeFilled/>} />} />
                        </Form.Item>
                    </div>

                    <div className=''>
                        <Form.Item
                            name="email"
                            label={<h1 className='text-lg font-medium'>Email</h1>}
                            rules={[{
                                required: true, type: "email"
                            }]}
                        >
                            <Input size='large' placeholder='abc@gmail.com' suffix={ <Button icon={<DeleteFilled/>} />} />
                        </Form.Item>
                    </div>

                    <div className=''>
                        <Form.Item
                            name="password"
                            label={<h1 className='text-lg font-medium'>Password</h1>}
                            rules={[{
                                required: true, min: 6, max: 8
                            }]}
                        >
                            <Input.Password size='large' placeholder='********' />
                        </Form.Item>
                    </div>

                    <div className=''>
                        <Form.Item
                            name="gender"
                            label={<h1 className='text-lg font-medium'>Gender</h1>}
                            rules={[{
                                required: true
                            }]}
                        >
                            <Select size='large' placeholder='Choose Gender' >
                                <Select.Option value='male' >male</Select.Option>
                                <Select.Option value='female' >female</Select.Option>
                                <Select.Option value='other' >Other</Select.Option>
                            </Select>
                        </Form.Item>
                    </div>

                    <div className=''>
                        <Form.Item
                            name="subject"
                            label={<h1 className='text-lg font-medium'>Subject</h1>}
                            rules={[{
                                required: true
                            }]}
                        >
                            <Select size='large' placeholder='Choose Subject' mode='multiple' >
                                <Select.Option value='hindi' >Hindi</Select.Option>
                                <Select.Option value='english' >English</Select.Option>
                                <Select.Option value='maths' >Maths</Select.Option>
                            </Select>
                        </Form.Item>
                    </div>

                    <div className=''>
                        <Form.Item
                            name="price"
                            label={<h1 className='text-lg font-medium'>Price</h1>}
                            rules={[{
                                required: true, type: 'number'
                            }]}
                        >
                            <InputNumber size='large' placeholder='Enter Name'  className='!w-full'/>
                        </Form.Item>
                    </div>

                    <div className='col-span-2 w-[60%]'>
                        <Form.Item
                            name="address"
                            label={<h1 className='text-lg font-medium'>Address</h1>}
                            rules={[{
                                required: true,
                            }]}
                        >
                            <Input.TextArea rows={5} placeholder='Address'/>
                        </Form.Item>
                    </div>

                    <div>
                        <Form.Item  name='accepe' valuePropName='checked' >
                            <Checkbox>I Accept</Checkbox>
                        </Form.Item>
                    </div>

                    <div>
                        <Form.Item>
                            <Button size='large' htmlType='submit' type='primary' >Submit</Button>
                        </Form.Item>
                    </div>
                </Form>
            </div>
        </div>
    </div>
)
}

export default FormAnt