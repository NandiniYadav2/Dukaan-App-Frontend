import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { RevenueCard } from './Components/RevenueCard'
// import './App.css'

function App() {
 


  return (
   <div>
    
     <RevenueCard title={"Amount Pending"} amount={"92,312.20"} orderCount={13}/>
   </div>
  )
}

export default App
