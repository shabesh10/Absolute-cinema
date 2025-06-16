import React from 'react'
import Navbar from './components/Navbar'
import PageContent from './PageContent'

const App = () => {
  return (
    <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white min-h-screen">
    <Navbar/>
    <PageContent/>
    </div>
  )
}

export default App