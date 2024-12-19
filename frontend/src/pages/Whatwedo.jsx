import React from 'react'
import warehouseImage from "../assets/warehouse.png"
import VagetableImage from "../assets/Vagetable.png"
import FoodImage from "../assets/Food.png"

const Whatwedo = () => {
  const card=[
    {
      image:warehouseImage,
      "Date":"september 20,2023"
      
    },
    {
      image:VagetableImage,
      "Date":"september 20,2023"
    },
    {
      image:FoodImage,
      "Date":"september 20,2023"
    },
  ]
  return (
    <div className="w-full h-auto">

    <div className="flex flex-col w-full justify-center items-center ">
    <div className="clicked font-bold text-3xl pb-2">Featured Assarain News</div>
    <div className="text-center w-4/5 pt-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut aperiam, nisi, facere quod consectetur nam accusantium minus saepe, recusandae quae reiciendis impedit. Temporibus dolor nesciunt necessitatibus. Ducimus recusandae maiores sunt.</div>

    </div>
    <div className="mx-24">
      <ul className="grid grid-cols-1 md:grid-cols-3">
        {card.map((items, index)=><li className="flex flex-col items-center justify-center p-5" key={index}><div className="flex flex-col">
          
          <img src={items.image}/>
          <h3 className="color3 text-xl font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, eaque? Rem qui tempore et atq</h3>
          <span className="unclicked">{items.Date}</span>
          <span className="color2 font-medium">Read more</span>
          </div></li>)}
      </ul>
      
    </div>

  </div>
  )
}

export default Whatwedo