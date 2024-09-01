import '../css/Navbar.css'
import DCCLogoDark from '../assets/dcc_dark.svg'
import { useState } from 'react';

export default function Navbar() {

  let [navRevealedState, setNavRevealedState] = useState(false);

  return (
    <>
      <div className='Navbar'>
        <img className='navbar-logo' src={DCCLogoDark} alt="DCC Logo" />
        
        <button title='Menu' className="navbar-btn" onClick={() => setNavRevealedState(prev => !prev)}>
          <svg viewBox="0 0 40 40" className={navRevealedState?'hamburger rotateViewBox':'hamburger'}>
            <rect x="4" fill="currentColor" y="11" width="32" height="2" rx="2" ry="1"  className={navRevealedState ? 'rotateRect' : ''}></rect>
            <rect x="4" fill="currentColor" y="19" width="32" height="2" rx="2" ry="1"></rect>
            <rect x="4" fill="currentColor" y="27" width="32" height="2" rx="2" ry="1" className={navRevealedState ? 'invisible' : ''}></rect>
          </svg>
        </button>
      </div>

      <div className={navRevealedState?'Menu':'Menu menu-hidden'}>
        <a href="/">Home</a>
        <a href="/notes">Past Meeting Notes</a>
      </div>
    </>
  );
}