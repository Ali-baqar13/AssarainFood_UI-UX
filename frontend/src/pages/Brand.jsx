import React from 'react'
import img1 from '../assets/Img1.png'
import img2 from '../assets/Img2.png'
import img3 from '../assets/Img3.png'
import img4 from '../assets/Img4.png'
import img5 from '../assets/Img5.png'
import img6 from '../assets/Img6.png'
import img7 from '../assets/Img7.png'
import img8 from '../assets/Img8.png'
import img9 from '../assets/Img9.png'
import img10 from '../assets/Img10.png'
import img11 from '../assets/Img11.png'

const Brand = () => {
  const boxes=[
    {
      name:img1
    },
    {
      name:img2
    },
    {
      name:img3
    },
    {
      name:img4
    },
    {
      name:img5
    },
    {
      name:img6
    },
    {
      name:img7
    },
    {
      name:img8
    },
    {
      name:img9
    },
    {
      name:img10
    },
    {
      name:img11
    },
  ]
  return (
    <div className="brandColor w-full h-auto">

      <div className="flex flex-col w-full  justify-center items-center ">
      <div className="clicked font-bold text-3xl pb-2">Our Brands</div>
      <div className="text-center w-4/5 pt-6">Lorem ipsum, dolor sit amet consectetur adipisicing elitsquat.</div>

      </div>
      <div className="p-5 h-auto">
        <ul className="grid grid-cols-3 md:grid-cols-5  ">
          {boxes.map((items, index)=><li className="flex items-center justify-center p-5  border border-blue-200" key={index}><img className="w-[80px] h-[80px]" src={items.name}/></li>)}
        </ul>
        
      </div>

    </div>
  )
}

export default Brand