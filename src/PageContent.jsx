import React from 'react'
import Home from './sections/Home'
import Random from './sections/Random'
import Search from './sections/Search'
import About from './sections/About'
import Guide from './sections/Guide'

const PageContent = () => {
  return (
    <div className="mt-[3rem]" id='home'>
      <Home/>
      <Random/>
      <Guide/>
      <Search/>
      <About/>
    </div>
    
  )
}

export default PageContent