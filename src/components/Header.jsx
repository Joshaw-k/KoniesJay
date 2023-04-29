import React from 'react'
// images
import Logo from '../assets/logo.svg'
import { Link } from 'react-scroll'

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <a href="#">
            <h1 className="text-3xl font-semibold text-gradient leading-none">
              DEV
            </h1>
            <h1 className="text-3xl font-semibold">JOSH</h1>
          </a>
          {/* button */}
          <button className="btn btn-sm"><Link to="contact" smooth={true}>Work with me</Link></button>
        </div>
      </div>
    </header>
  )
}

export default Header
