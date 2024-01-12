import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import logo from "../images/logo.png"
import '../styles/navbar.css'
import { FaInstagram, FaWhatsapp, FaTiktok, FaSnapchat, FaBars, FaXmark } from 'react-icons/fa6'
import { useState } from 'react'


const Navbar = () => {
  const [ open, setOpen ] = useState(false)
  const [ stop, setStop ] = useState('stop')
  
  const toogled = () => {
    setOpen(true)
  }

  const closeNav = () => {
    setOpen(false)
    setStop('animate__animated animate__slideOutRight')
  }

  return (
    <nav>
      <div className="nav__normalNav">
        <Link to={'/'}><img src={logo} alt="" width={'40px'} /></Link>
        <div className="nav__links">
          <li><NavLink to={'/'}>Home</NavLink></li>
          <li><NavLink to={'AboutPage'}>About</NavLink></li>
          <li><NavLink to={'ProductPage'}>Products</NavLink></li>
          <li><NavLink to={'ContactPage'}>Contact</NavLink></li>
        </div>
          
        <div className='nav__socialIcons'>
          <Link className='instagram__icon' to='https://instagram.com/margy.glow?igshid=MzRlODBiNWFlZA=='><FaInstagram /></Link>
          <Link className='whatsapp__icon' to='https://wa.me/+2348055431383'><FaWhatsapp /></Link>
          <Link className='tiktok__icon' to='https://www.tiktok.com/@lov_keeler?_t=8gGHoHyOhte&_r=1'><FaTiktok /></Link>
          <Link className='snapchat__icon' to='https://www.snapchat.com/add/chinyereo7599?share_id=ErwigUJBbFA&locale=en-US'><FaSnapchat /></Link>
        </div>
        <div className="nav__bars" id={open ? 'hidden' : null}>
          <button className='bar' onClick={toogled} ><FaBars/></button>
        </div>
        <div className="nav__xmark " id={!open ? 'hidden' : null}>
          <button onClick={closeNav} className='close'><FaXmark/></button>
        </div>
      </div>
      
      {open ? <div className= 'nav__responsiveAllLinks'>
        <div className='nav__responsiveLinks animate__animated animate__slideInRight'>
          <div  className='nav__responsiveLinksContainer'>
              <div className="nav__links">
              <li><NavLink to={'/'}>Home</NavLink></li>
              <li><NavLink to={'AboutPage'}>About</NavLink></li>
              <li><NavLink to={'ProductPage'}>Products</NavLink></li>
              <li><NavLink to={'ContactPage'}>Contact</NavLink></li>
              <Outlet />
            </div>
              
            <div className='nav__socialIcons'>
              <Link className='instagram__icon' to='https://instagram.com/margy.glow?igshid=MzRlODBiNWFlZA=='><FaInstagram /></Link>
              <Link className='whatsapp__icon' to='https://wa.me/+2348055431383'><FaWhatsapp /></Link>
              <Link className='tiktok__icon' to='https://www.tiktok.com/@lov_keeler?_t=8gGHoHyOhte&_r=1'><FaTiktok /></Link>
              <Link className='snapchat__icon' to='https://www.snapchat.com/add/chinyereo7599?share_id=ErwigUJBbFA&locale=en-US'><FaSnapchat /></Link>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      :
      <div className='nav__responsiveAllLinks'>
        <div className={`nav__responsiveLinks ${stop}`}>
          <div  className={`nav__responsiveLinksContainer`}>
              <div className="nav__links">
              <li><NavLink to={'/'}>Home</NavLink></li>
              <li><NavLink to={'AboutPage'}>About</NavLink></li>
              <li><NavLink to={'ProductPage'}>Products</NavLink></li>
              <li><NavLink to={'ContactPage'}>Contact</NavLink></li>
              <Outlet />
            </div>
              
            <div className='nav__socialIcons'>
              <Link className='instagram__icon' to='https://instagram.com/margy.glow?igshid=MzRlODBiNWFlZA=='><FaInstagram /></Link>
              <Link className='whatsapp__icon' to='https://wa.me/+2348055431383'><FaWhatsapp /></Link>
              <Link className='tiktok__icon' to='https://www.tiktok.com/@lov_keeler?_t=8gGHoHyOhte&_r=1'><FaTiktok /></Link>
              <Link className='snapchat__icon' to='https://www.snapchat.com/add/chinyereo7599?share_id=ErwigUJBbFA&locale=en-US'><FaSnapchat /></Link>
              <Outlet />
            </div>
          </div>
        </div>
      </div>}
    </nav>
  )
}
export default Navbar