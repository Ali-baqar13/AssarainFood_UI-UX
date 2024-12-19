import React from 'react'

const About = () => {
  const card=[
    {
      number:"2000+",
      name:"Global Brand"
    },
    {
      number:"200+",
      name:"Warehouses"
    },
    {
      number:"85000+",
      name:"Pallet Capcity"
    },
    {
      number:"300+",
      name:"Own Vehicles"
    },
    {
      number:"1000+",
      name:"Skilled Employees"
    },
    {
      number:"Omni",
      name:"channel coverage"
    },
  ]
  return (
    <div className="w-full h-auto p-5">

    <div className="flex flex-col w-full h-1/3 justify-center items-center ">
    <div className="clicked font-bold text-3xl pb-2">About Us</div>
    <div className="text-center w-4/5 p-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut aperiam, nisi, facere quod consectetur nam accusantium minus saepe, recusa.</div>

    </div>
    <div className="mx-24">
      <ul className="grid grid-cols-1 md:grid-cols-3">
        {card.map((items, index)=><li className="flex flex-col items-center justify-center p-10  border border-blue-200" key={index}><div className="flex flex-col">
          
          <h2 className="color2 text-3xl font-medium">{items.number}</h2>
          <h3 className="color3 text-xl font-medium">{items.name}</h3>
          <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, ipsam a, placeat dolorem altae? Pariatur quod corrupti est itaque!</h5>

          </div></li>)}
      </ul>
      
    </div>

  </div>
  )
}

export default About