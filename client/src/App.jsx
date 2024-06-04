import { useState } from 'react'


import Nav from './Components/Nav'
import Footer from'./Components/Footer/footer.jsx';
import { Gallery } from './Components/Gallery'
import { Outlet } from 'react-router-dom'

import Carousel from './Components/Carousel/Carousel'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav />
    {/* <Navbar /> */}
    <Outlet />
    
 <Footer />
    </>
  )
}

export default App
