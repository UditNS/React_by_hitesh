import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router'
// Why this file?
// We want the header and footer in all routes so there are two ways of doing that 
// 1. go to each component and call header and footer. It works but not optimized
// 2. That we are going to do We want to pass in home about us dynamically


function Layout() {
  return (
    <>
        <Header />
        <Outlet /> {/*here header aur footer same but use andar component changes as route changes */}
        <Footer />
    </>
  )
}

export default Layout