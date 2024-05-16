import React,{useState} from 'react'
import Leftside from './components/Leftside'
import Tabcomp from "./components/Tab"
import Rightside from './components/Rightside'
import View from './components/View'
const App = () => {
  const [showmodal,Setshowmodal]=useState("")
  return (
    <div className="pl-11 pt-9 h-screen overflow-y-scroll w-full md:flex gap-4 pr-3 mb-5 " style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <Leftside showModal={showmodal} Setshowmodal={Setshowmodal}/>
        <Tabcomp/>
        <Rightside/>
        {showmodal==="show"?<View  showModal={showmodal} Setshowmodal={Setshowmodal}/>:""}
    </div>
  )
}

export default App