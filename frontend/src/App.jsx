import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Footer from './components/Footer'
import FreeBooks from './components/FreeBooks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Banner/>
      <FreeBooks/>
      <Footer/>
    </>
  )
}

export default App
