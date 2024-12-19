import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="brandColor h-[700px]">
      <div className="flex flex-col w-full h-1/3 justify-center items-center ">
        <div className="clicked font-bold text-3xl pb-2">Call Us or Fill the Form</div>
        <div className="text-center w-4/5 pt-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut aperiam, nisi, facere quod consectetur nam accusantium minus saepe, recusandae quae reiciendis impedit. Temporibus dolor nesciunt necessitatibus. Ducimus recusandae maiores sunt.</div>
      </div>
      <div className="px-3">
        <div className="grid grid-cols-2 h-full">
          <div className="col-span-1 ">
            <div className="flex flex-col">
              <div className="flex items-center  gap-5">
                {/* <img className="w-[50px] h-[50px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9NY-2JdNjCTS0NPHFYlRKAepY6iI-0ehiYg&s"/> */}
                <FaPhoneAlt />
                <span>+92 xxx xxxxxx</span>
              </div>
              <div className="flex items-center mt-2 gap-5">
                <FaPhoneAlt />  <span>+92 xxx xxxxxx</span>
              </div>
              <div className="flex items-center  mt-2 gap-5">
                <FaPhoneAlt /><span>+92 xxx xxxxxx</span>
              </div>
            </div>
          </div>
          <div className="col-span-1 h-full">
            <div className="grid grid-cols-2 gap-4 ">
              <input placeholder='FullName' className="p-2 brandColor border border-blue-200"></input>
              <input placeholder='Email Address ' className="p-2 brandColor border border-blue-200"></input>
              <input placeholder='FullName' className="p-2 brandColor border border-blue-200"></input>
              <input placeholder='Email Address' className="p-2 brandColor border border-blue-200"></input>
            </div>
            <input placeholder='write something here...' className="w-full h-[100px] text-start flex pb-10 pl-1 border border-blue-200 mt-5 brandColor"></input>
            <button className="bg-blue-500 px-4 py-1 text-white mt-2">Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact