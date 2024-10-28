import { authSelector } from '@/redux/reducers/authReducer'
import { Button } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import Login from './auth/Login'

const HomePage = () => {
  const auth = useSelector(authSelector);


  return auth.token ? <HomePage/> : <Login/>
}

export default HomePage
