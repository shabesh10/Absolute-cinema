import React from 'react'

const Navbar = () => {
  return (
    <header className='fixed top-0'>
        <section className='flex justify-between items-center'>
            <div>

              
                Absolute Cinema!
            </div>
            <nav>
                <ul className='flex gap-10'>
                <li><a href="#home">Home</a></li>
                <li><a href="#random">Random</a></li>
                <li><a href="#guide">Guide</a></li>
                <li><a href="#search">Search</a></li>
                <li><a href="#about">About</a></li>
            </ul>
            </nav>
        </section> 
    </header>
  )
}
                            
export default Navbar