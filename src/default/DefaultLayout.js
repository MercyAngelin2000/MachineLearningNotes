import React from 'react'
import '../App.css'
import Header from '../component/Header'
import Footer from '../component/Footer'
import AppContent from '../component/AppContent'
import Sidebar from '../component/Sidebar'

function DefaultLayout() {
  return (
    <div className='mainpage wrapper'>
      <div className="header-wrap">
      <Header />
      </div>
        <div className="row">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="col" id="main">
          <AppContent />
          </div>
        </div>
      <div className="footer-wrap">
      <Footer />
      </div>
    </div>
  )
}

export default DefaultLayout