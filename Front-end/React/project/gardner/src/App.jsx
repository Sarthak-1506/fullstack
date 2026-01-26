import React from 'react'
import Home from './website/Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './website/Pages/About'
import Service from './website/pages/Service'
import Project from './website/Pages/Project'
import Features from './website/Pages/Features'
import Quata from './website/Pages/Quata'
import Our from './website/Pages/Our'
import Testimonial from './website/Pages/Testimonial'
import Error404 from './website/Pages/Error404'
import Contact from './website/Pages/Contact'
import Dashboard from './admin/Apages/Dashboard'
import ServiceManagment from './admin/Apages/ServiceManagment'
import ProjectManagement from './admin/Apages/ProjectManagement'
import TeamManage from './admin/Apages/TeamManage'
import AddTeam from './admin/Apages/AddTeam'
import Alogin from './admin/Apages/Alogin'
import Login from './website/Pages/Login'
import Edit from './website/Pages/Edit'
import Register from './website/Pages/Register'





function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/Service' element={<Service />} />
          <Route path='/project' element={<Project />} />

          <Route path='/Feat' element={<Features />} />
          <Route path='/qua' element={<Quata />} />
          <Route path='/our' element={<Our />} />
          <Route path='/test' element={<Testimonial />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          
          <Route path='/editdata' element={<Edit />} />

          <Route path='*' element={<Error404 />} />

          {/* Admin */}
          <Route path='/dash' element={<Dashboard />} />
          <Route path='/ser' element={<ServiceManagment />} />
          <Route path='/pro' element={<ProjectManagement />} />
          <Route path='/teammanage' element={<TeamManage />} />
          <Route path='/teamadd' element={<AddTeam />} />
          <Route path='/alogin' element={<Alogin />} />

        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App