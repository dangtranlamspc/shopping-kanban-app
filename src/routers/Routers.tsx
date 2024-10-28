import { Layout, Spin } from 'antd'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { localDataNames } from '../constants/appInfors'
import { addAuth, authSelector, AuthState } from '../redux/reducers/authReducer'
import type { AppProps } from 'next/app'

const {Content, Footer, Header} = Layout

const Routers = ({ Component, pageProps }: any) => {

  const [isLoading , setIsLoading] = useState(false);

  const auth : AuthState = useSelector(authSelector)

  const dispatch = useDispatch()

  useEffect(()=>{
    getData()
  },[])

  const getData = async () => {
    const res = localStorage.getItem(localDataNames.authData)
    res && dispatch(addAuth(JSON.parse(res)))
  };

  console.log(auth)
  return isLoading ? <Spin/> : !auth.token 
  ? 
    (
      <Layout>
        <Content>
          <Component pageProps={pageProps} />
        </Content>
      </Layout> 
    ) : (
    <Layout>
      <Header/>
      <Content>
        <Component pageProps={pageProps} />
      </Content>
      <Footer/>
    </Layout> 
  )
}

export default Routers