import React, { useState,useEffect, Suspense } from 'react'
import { Route,Routes,Navigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { AnimatePresence } from "framer-motion"
import Logo from './Logo'
import Search from './Search'

//import Home from '../scenes/Home'
//import Coffes from '../scenes/Coffes'
//import CoffeeSingle from '../scenes/CoffeeSingle'
//import Sugars from '../scenes/Sugars'
//import Salty from '../scenes/Saltys'
//import Error404 from '../scenes/Error404'



const Home = React.lazy(()=>import('../scenes/Home'))
const Coffes = React.lazy(()=>import('../scenes/Coffes'))
const SingleProduct = React.lazy(()=>import('./SingleProduct'))
const Sugars = React.lazy(()=>import('../scenes/Sugars'))
const Saltys = React.lazy(()=>import('../scenes/Saltys'))
const Error404 = React.lazy(()=>import('../scenes/Error404'))





const AnimatedRoutes = () => {
    const location = useLocation()


    const [w,setW] = useState(window.innerWidth)

    useEffect(()=>{
      const handleResize =()=>{
        setW(window.innerWidth)
      }
  
      window.addEventListener('resize', handleResize);
      return()=>{
        window.removeEventListener('resize', handleResize);
      }
  
     
    },[])





  return (
    <div>
         {
        w <= 700 ?(<>
            <Logo/>
        
        </>)
        :
        <>
      
        </>

      }
     
    
<AnimatePresence>
    <Routes Routes location={location} key={location.pathname} >
      
      {
        w <= 700 ?(<>
         <Route path="/" element={<Navigate to='home' replace/> } />
      <Route path='/home' element={  <Suspense fallback={<h1>shee</h1>}><Home/></Suspense>}/>
      <Route path='/coffees' element={ <Suspense fallback={<h1>shee</h1>}><Coffes/></Suspense>}/>
      <Route path='/sugars' element={ <Suspense fallback={<h1>shee</h1>}><Sugars/></Suspense>}/>
      <Route path='/saltys' element={ <Suspense fallback={<h1>shee</h1>}><Saltys/></Suspense>}/>
      <Route path='/singleProduct/:productTitle' element={ <Suspense fallback={<h1>shee</h1>}><SingleProduct/></Suspense>}/>
        </>
        )
        :
        <>
        <Route path='/*' element={ <Suspense fallback={<h1>shee</h1>}><Error404/></Suspense>}/>
        </>

      }
     






   </Routes>
 
   </AnimatePresence>
    </div>
  )
}

export default AnimatedRoutes
