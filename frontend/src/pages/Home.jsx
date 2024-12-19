import React from 'react'
import About from './About'
import Brand from './Brand'
import Whatwedo from './Whatwedo'
import Contact from './Contact'

const Home = () => {
  return (
    <>
    {/* must go on home first to check the site */}
    <section>
      {/* Home section */}
      <div className="homeImage">
        {/* Works wor medium and so on screens */}
      <div className="xs:hidden md:flex items-center px-20 w-full h-full">
        <div className="bg-white h-[300px] w-[400px]">
          <div className="p-10 flex flex-col items-center justify-center ">
            <h3 className="font-semibold text-center color2 text-2xl">Assarain Food LLTC</h3>
            <h2 className="font-semibold text-center mt-5 text-3xl">Oman best Food Distributor Fresh, Good, Natural and Speciality</h2>
          </div>
        </div>
        <div className="shadeBlue h-[300px] w-[200px]">
          <div className="flex h-full w-full text-white justify-center items-center">
            <h2 className="px-5">Video of warehouse How Our Distribution Process </h2>
          </div>
        </div>
      </div>
      {/* For small Screen just work above 660px something */}
      <div className="shadeBlue xs:flex md:hidden items-center  w-full h-[500px]">
        <div className="px-10  flex flex-col items-center justify-center ">
          <h3 className="font-semibold text-white text-center  text-2xl">Assarain Food LLTC</h3>
          <h2 className="font-semibold text-white text-center mt-5 text-3xl">Oman best Food Distributor Fresh, Good, Natural and Speciality</h2>
          <button className="px-4 py-1 bg-blue-200 mt-2">Request a Qote</button>
        </div>
      </div>
    </div>
    </section>
    <section>
      {/* second section */}
      <Brand/>
    </section>
    <section>
      {/* third section */}
       <About/>
    </section>
    <section>
      {/* fourth section */}
      <Whatwedo/>
    </section>
    <section>
      {/* Fifth section */}
      <Contact/>
    </section>
    </>
   
  )
}

export default Home