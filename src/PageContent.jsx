import React from 'react'
import Home from './sections/Home'
import Random from './sections/Random'
import Search from './sections/Search'
import About from './sections/About'
import Guide from './sections/Guide'

const PageContent = ({ openNavigation }) => {
  const basePadding = '4rem';
  const openPadding = '12rem';
  return (
    <div id='home' style={{ paddingTop: openNavigation ? openPadding : basePadding }} className='lg:mt-[-10rem]'>
      <Home/>
      <Random/>
      <Guide/>
      <Search/>
      <About/>
    </div>
    
  )
}

export default PageContent