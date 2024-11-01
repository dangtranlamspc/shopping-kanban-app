import { Button, Checkbox, Form, Input, Typography } from 'antd';
import React, { useState } from 'react'

interface SignUp {
    firstName : string,
    lastName : string,
    email : string,
    password : string,
}

const Signup = () => {
    const [isLoading, setIsLoading] = useState(false);

    const [isAgree, setIsAgree] = useState(false);

    const [form] = Form.useForm();

    const handleSignUp = async (values : SignUp) => {
        console.log(values)
    }

  return (
    <div className='container-fluid' style={{height : '100vh'}}>
        <div className="row" style={{height : '100vh'}}>
            <div 
                className='d-none d-md-block col-6 p-0'
                style={{
                    backgroundImage : `url(/images/regiter.png)`,
                    backgroundSize : 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="mt-5 ml-5" style={{backgroundColor : 'transparent'}}>
                    <img 
                        src='/images/logo.png'
                        alt=''
                        style={{backgroundColor : 'transparent'}}
                    />
                </div>
            </div>
            <div className='col-sm-12 col-md-6'>
                <div className="container d-flex" style={{height : '100%', alignItems:'center'}}>
                    <div className='col-sm-12 col-md-12 col-lg-8 offset-lg-2'>
                        <div className="mt-4">
                            <Typography.Title className='mt-0'>Create new account</Typography.Title>
                            <Typography.Paragraph type='secondary'>Please enter details</Typography.Paragraph>
                        </div>
                        <Form 
                            form={form} 
                            layout='vertical' 
                            onFinish={handleSignUp} 
                            size='large'
                        >
                            <Form.Item name={'firstName'} label='First Name'>
                                <Input placeholder='' allowClear />
                            </Form.Item>
                            <Form.Item name={'lastName'} label='Last Name'>
                                <Input placeholder='' allowClear />
                            </Form.Item>
                            <Form.Item 
                                name={'email'} 
                                label='Email' 
                                rules={[{
                                    required : true,
                                    message : 'Please enter your Email'
                                }]}
                            >
                                <Input placeholder='' type='email-address' allowClear />
                            </Form.Item>
                            <Form.Item 
                                name={'password'}
                                label='Password'
                                rules={[{
                                    required : true,
                                    message : 'Please enter your password'
                                }]}
                            >
                                <Input placeholder='' type='password' allowClear />
                            </Form.Item>
                        </Form>
                        <div className="mt-4">
                            <Checkbox  
                                onChange={(val) => setIsAgree(val.target.checked)}
                                checked={isAgree}
                            >
                                I agree with Term & Conditions 
                            </Checkbox>
                        </div>
                        <div className="mt-4">
                            <Button type='primary' size='large' style={{width:'100%'}} onClick={()=>form.submit()}>Sign Up</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup