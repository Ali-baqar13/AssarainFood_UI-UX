import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";

const foot = () => {
  return (
      <footer className=" h-auto text-white bgColor3 p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 h-3/4 gap-10">
            <div className="col-span-1 flex flex-col justify-between">
                <div className="">
                    <h1 className="text-3xl">Deliver on Time with no hessels</h1>
                </div>
                <div className="flex gap-5 mt-10">
                    <div><FaFacebookSquare/></div>
                    <div><FaLinkedin/></div>
                    <div><FaTwitter/></div>
                    <div><FaInstagram/></div>
                </div>
            </div>
            
            <div className="sm:mt-5 md:mt-0 flex flex-col justify-between h-[150px]">
                <h1 className="text-2xl">Keep up to date</h1>
                <div className=" flex gap-2">
                <input placeholder="Email address " className=" bgColor3 text-black mt-4p-1 w-1/2"></input>
                <button className="py-1 px-4 bg-blue-500">Sign Up</button>
                </div>
                <div>Privacy / Policy / Terms And Condition / Contact</div>
            </div>

        </div>
        <div className="relative pt-10 bottom-2">copyright issue <FaRegCopyright className="inline-block"/> Design an dDevelopment team</div>

      </footer>
  )
}

export default foot