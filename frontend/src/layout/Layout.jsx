import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../header/Header.jsx';
import Footer from "../foot/foot.jsx"




const Layout = () => {
  console.log("1 layout")
  return (

    <>
     <Header />
      <main >
      <Outlet />
      </main>
      <div className="">
      <Footer/>
      </div>
      
   
    </>

  )
}

export default Layout