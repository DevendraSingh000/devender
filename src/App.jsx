import React, { useEffect, useState } from 'react'

import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Loader from './components/Loader';

function App() {
  const [firstvisit, setFirstvisit] = useState(true)
  

  useEffect(() => {
    setTimeout(() => setFirstvisit(false), 3000)
  }, []);


  return (
    <div>

      <div className='loder'>{firstvisit &&  <Loader />}</div>
      <div >
        <Navbar/>
        <Outlet/>
      </div>
    </div>
  )
}

export default App
