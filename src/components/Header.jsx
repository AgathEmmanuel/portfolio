import './Header.css'
import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import mylogo from "../../src/image/mylogo.png"



const Header = () => {
    const [show,setShow]=useState(true)
  return (
          <div className='header'>
              <div className='header-options-left'>
          <div className='header-options'><Link activeClass="active" to="home" spy={true} smooth={false}>
                <img src={mylogo} alt="" className='header-mylogo' />
           </Link></div>
              </div>
              <div className='header-options-right'>
          <div className='header-options'><Link  to="work" spy={true} smooth={false}>Work</Link></div>
          <div className='header-options'><Link  to="about" spy={true} smooth={false}>About</Link></div>
          <div className='header-options'><Link  to="contact" spy={true} smooth={false}>Contact</Link></div>
          <a className='header-options' href="https://agathemmanuel.hashnode.dev/" target="_blank" rel="noreferrer"> Blog</a>
              </div>
            </div>
  )
}

export default Header
