import React, { useRef, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { Link, NavLink } from 'react-router-dom'
import { BiMenu } from "react-icons/bi";

const Header = () => {

  const navLinks = [
    {
      path: "/home",
      display: "Home",
    },
    {
      path: "/about",
      display: "About",
    },
    {
      path: "/what",
      display: "What We Do",
    },
    {
      path: "/brand",
      display: "Brands",
    },
    {
      path: "/news",
      display: "News",
    },
    {
      path: "/carriers",
      display: "Carriers",
    },
    {
      path: "/contact",
      display: "Contact Us",
    },
  ];
  // const menuRef=useRef(null)
  // const toggle_menu=menuRef.current.classList.toggle("show__menu")
  return (
    <>
      <header className="px-5">
        <div className="grid grid-rows">
          <div className="flex justify-between items-center ">
            <div className="">
              <figure className="w-[118px] h-[80px] mt-1">
                <img className="w-full h-full" src="https://assarainfoods.com/themes/front/images/assarinfood.png" />
              </figure>
            </div>
            <div className="">
              <div className="lg:hidden flex " >
                <CiSearch className="w-6 h-6" />
                <BiMenu className="w-6 h-6 cursor-pointer"></BiMenu>
              </div>
              <div className="navigation flex justify-between items-center gap-10 unclicked ">
                <div>For Retailers</div>
                <div>For suppliers</div>
                <div>Location</div>
                <div className="color1 text-lg font-semibold px-5 py-1 text-center">Request a Quote</div>
                {/* <div className="md:hidden mb-8 " >
                  <BiMenu className="w-6 h-6 cursor-pointer"></BiMenu>
                 
                </div> */}
              </div>
            </div>
          </div>
          <div className="mt-5 navigation">
            <div className="flex justify-between">
              <div className="">
                <ul className="flex justify-between gap-10 " >
                  {
                    navLinks.map((items, index) => <li key={index}>
                      <NavLink className={({ isActive }) =>
                        isActive ? "clicked font-semibold pb-[5px]" : "unclicked"
                      } to={items.path}>{items.display} </NavLink>
                    </li>)
                  }

                </ul>
              </div>
              <div >
                <button ><CiSearch className="w-[24px] h-[24px]" /></button>

              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;



