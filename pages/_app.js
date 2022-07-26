import React, {useState, useEffect} from 'react'
import '../styles/globals.css'
import { AppProps } from 'next/app'
import { Layout } from '../components'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
       <Component {...pageProps}/>
    </Layout>
    )
   
}

export default MyApp

