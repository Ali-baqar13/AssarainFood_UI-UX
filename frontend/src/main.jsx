import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Layout from './layout/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Brand from './pages/Brand.jsx'
import Contact from './pages/Contact.jsx'
import Whatwedo from './pages/Whatwedo.jsx'
import "./index.css"


const router = createBrowserRouter(
  createRoutesFromElements(
     <Route path='/' element={<Layout/>}>
      <Route path="" element={<Home/>}/>   
      <Route path="contact" element={<Contact/>}/>  
      <Route path="about" element={<About/>}/>  
      <Route path="brand" element={<Brand/>}/>  
      <Route path="what" element={<Whatwedo/>}/> 
    
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  < StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
