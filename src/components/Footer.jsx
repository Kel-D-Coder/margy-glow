import React from 'react';
import '../styles/footer.css';
import { Link, Outlet } from 'react-router-dom';
import { FaWhatsapp, FaInstagram, FaSnapchat, FaTiktok } from 'react-icons/fa';

function Footer() {
  return (
    <React.Fragment>
      <footer>
        <div className="footer-links">
          <Link to={'/'}>Home</Link>
          <Link to={'AboutPage'}>About</Link>
          <Link to={'ProductPage'}>Products</Link>
          <Link to={'ContactPage'}>Contact</Link>
        </div>

        <div className="footer-icons">
        <Link to={'https://wa.me/+2348055431383'} className='whatsapp__icon'>
            <FaWhatsapp />
          </Link>
          <Link to={'https://www.snapchat.com/add/chinyereo7599?share_id=ErwigUJBbFA&locale=en-US'} className='snapchat__icon'>
            <FaSnapchat/>
          </Link>
          <Link to={'https://www.tiktok.com/@lov_keeler?_t=8gGHoHyOhte&_r=1'} className='tiktok__icon'>
            <FaTiktok />
          </Link>
          <Link to={'https://instagram.com/margy.glow?igshid=MzRlODBiNWFlZA=='} className='instagram__icon'>
            <FaInstagram />
          </Link>
          <Outlet/>
        </div>
        <p> CopyRight &copy; {new Date().getFullYear()}</p>
      </footer>
    </React.Fragment>
  );
}

export default Footer;