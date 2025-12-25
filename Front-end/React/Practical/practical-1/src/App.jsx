import React from 'react'
import Practical_1 from './practicals/practical_1'
import Practical_2 from './practicals/Practical_2'
import Practical__3 from './practicals/Practical__3'
import Practical_4 from './practicals/Practical_4'
import Practical_5 from './practicals/Practical_5'
import Practical_5_1 from './practicals/Practical_5_1'
import Practical_6 from './practicals/Practical_6'
import Practical_6_1 from './practicals/Practical_6_1'
import Practical_7 from './practicals/Practical_7'
import Practical_7_2 from './practicals/Practical_7_2'
import Practical_8 from './practicals/Practical_8'
import Practical_9 from './practicals/Practical_9'
import Practical_9_1 from './practicals/Practical_9_1'
import Practical_10 from './practicals/Practical_10'
import Practical_10_1 from './practicals/Practical_10_1'
import Practical_10_2 from './practicals/Practical_10_2'
import { BrowserRouter, Route, Router } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Practical_12 from './practicals/Practical_12'

function App() {
  
  return (
    <div>
      <Practical_1/>
      <Practical_2/>
      <Practical__3/>
      <Practical_4/>
      <Practical_5/>
      <Practical_5_1/>
      <Practical_6/>
      <Practical_6_1/>
      <Practical_7/>
      <Practical_7_2/>
      <Practical_8/>
      <Practical_9/> 
      <Practical_9_1/>
      <Practical_10/>
      <Practical_10_1/>
      <Practical_10_2/>
      <Practical_12/>

      {/* <BrowserRouter>
      <Router>
        <Route path="/" element={<Home/>}  />
        <Route path="/about" element={<About/>}  />
        <Route path="/contact" element={<Contact/>}  />
      </Router>
      </BrowserRouter> */}
    </div>
    
  )
  
}


export default App
