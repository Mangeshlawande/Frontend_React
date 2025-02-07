import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';





//Outlet :: from react router dom return some special things
//
function Layout() {
  return (
    <div>
        <Header />
        <Outlet  />
        <Footer />

    </div>
  )
}

export default Layout