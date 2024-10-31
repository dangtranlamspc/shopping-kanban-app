import HeaderComponent from '@/components/HeaderComponent';
import { Layout, Spin } from 'antd'
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react'

const {Content, Footer, Header} = Layout

const Routers = ({ Component, pageProps }: any) => {

  const [isLoading , setIsLoading] = useState(false);

  const path = usePathname()

  useEffect(()=>{
    getData()
  },[])

  const getData = async () => {
  };

  const renderContent = (
    <Content>
      <Component pageProps={pageProps} />
    </Content>
)
  return isLoading ? <Spin/> : path && path.includes('auth')
  ? 
    (
      <Layout className='bg-white'>
        {renderContent}
      </Layout> 
    ) : (
    <Layout className='bg-white'>
      <HeaderComponent/>
        {renderContent}
      <Footer/>
    </Layout>
  )
}

export default Routers