import { useState } from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Courses from './pages/Courses'
function App() {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/course' element={<Courses/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
