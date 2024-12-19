import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../header/Header.jsx';
import Footer from '../Footer/Footer.jsx';





const Layout = () => {
  console.log("1 layout")
  return (

    <>
    <div class="flex flex-col h-screen justify-between">
     <Header />
      <main >
      <Outlet />
      </main>
      <Footer/>
      </div>
      
      
      
   
    </>

  )
}

export default Layout