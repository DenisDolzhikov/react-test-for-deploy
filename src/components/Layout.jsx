import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
        <main className='container'>
          <Outlet />
        </main>
      <Footer />
    </>
  )
}

export default Layout