import React from 'react'
import Header from './src/Component/Header/Header'
import Footer from './src/Component/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
      
    </div>
  )
}

export default  Layout
