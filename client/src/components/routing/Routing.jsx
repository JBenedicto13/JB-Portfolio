import { React, useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Home'
import ViewWork from '../ViewWork'

const Routing = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1440);

  useEffect(() => {
    // Function to set the isDesktop state based on the window width
    const handleWindowResize = () => {
      setIsDesktop(window.innerWidth >= 1440);
    };

    // Add event listener on component mount to handle window resize
    window.addEventListener('resize', handleWindowResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  return (
    <>
        <Routes>
            <Route path='/' element={<Home isDesktop={isDesktop} />} />
            <Route path='/home' element={<Home isDesktop={isDesktop} />} />
            <Route path='/work/view/:id' element={<ViewWork isDesktop={isDesktop} />} />
        </Routes>
    </>
  )
}

export default Routing
