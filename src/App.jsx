
import { Outlet } from "react-router-dom"
import NavbarComponent from "./components/NavbarComponent"
import { useState } from "react"
import FeatureComponent from "./components/FeatureComponent"


function App() {
  
  const [activeDark, setActiveDark]  = useState(false)

   
    
  return (
    <div className={activeDark ? 'dark' : ''} >
        <div className="dark:bg-mainBlue bg-lightGray">
           <NavbarComponent activeDark={activeDark} setActiveDark={setActiveDark}/>
           

        <Outlet/>
        </div>
    </div>
  )
}

export default App
