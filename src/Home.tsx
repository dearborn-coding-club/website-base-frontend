import React, { useState } from 'react';
import Card from './Card.tsx';
import DccDark from './assets/dcc_dark.svg';
import MimiEye from './assets/mimi_eye.gif';

function Nav() {

    let [navRevealedState, setNavRevealedState] = useState(false);

    function toggleNavState() {
        setNavRevealedState(ns => !ns);
    }


    const hamburgerStyle = {
        transform: 'rotate(0.625turn)',
        color: 'white'
    };

    const hamburgerFirstStyle = {
        transform: 'rotate(90deg) translate(0px, -33px)'
    };

    const hamburgerLastStyle = {
        width: '0',
        opacity: '0',
    };

    return (
      <header>
        <img className="logo" src={DccDark} />
        <button id="navbar-btn" onClick={toggleNavState}>
          <svg class="hamburger" viewBox="0 0 40 40" style={navRevealedState ? hamburgerStyle : {}}>
            <rect x="4" fill="currentColor" y="11" width="32" height="2" rx="2" ry="1" style={navRevealedState ? hamburgerFirstStyle : {}}></rect>
            <rect x="4" fill="currentColor" y="19" width="32" height="2" rx="2" ry="1"></rect>
            <rect x="4" fill="currentColor" y="27" width="32" height="2" rx="2" ry="1"style={navRevealedState ? hamburgerLastStyle : {}}></rect>
          </svg>
        </button>
        <nav style={{ transform: `translateX(${navRevealedState ? '0' : '-100vw'})` }}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/notes">Past Meeting Notes</a></li>
          </ul>
        </nav>
       </header>
    );
}

function Hero() {
    return (
      <div className="hero">
        <h1 className="hero-heading">
          Welcome to <br />
          <span className="text-highlight">Dearborn</span> <br />
          Coding Club
        </h1>
      </div>
    );
}

export default function Home() {
    return (
      <>
        <Nav />
        <main>
          <Hero />
          <div className="support">
            <div className="support__point">
              <img className="sp__image" src={MimiEye} />
              <div className="sp__text">
                <span>
                  Meet fellow <br />
                  <span className="text-highlight">hackers</span>
                </span>
              </div>
            </div>
            <Card>
              <span>
                Bring <br />
                <span className="text-highlight">questions</span> <br />
                and <br />
                <span className="text-highlight">projects</span>
              </span>
            </Card>
            <Card>
              <span>
                Enjoy <br />
                <span className="text-highlight">Yemeni Coffee</span>
              </span>
            </Card>
          </div>
        <button className="cta">
          Join the next meetup!
        </button>
        </main>
      </>
    );
}
