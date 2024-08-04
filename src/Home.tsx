import { useState } from 'react';
import React from 'react';
import DccDark from './assets/dcc_dark.svg';
import MimiEye from './assets/mimi_eye.gif';

function Nav() {

    let [navRevealedState, setNavRevealedState] = useState(false);

    function toggleNavState() {
        setNavRevealedState(ns => !ns);
    }

    return (
      <header>
        <img className="logo" src={DccDark} />
        <button id="nav-reveal" onClick={toggleNavState}>X</button>
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
            <div className="support__point">
              <img className="sp__image" src="#" />
              <div className="sp__text">
                <span>
                  Bring <br />
                  <span className="text-highlight">questions</span> <br />
                  and <br />
                  <span className="text-highlight">projects</span>
                </span>
              </div>
            </div>
            <div className="support__point">
              <img className="sp__image" src="#" />
              <div className="sp__text">
                <span>
                  Enjoy <br />
                  <span className="text-highlight">Yemeni Coffee</span>
                </span>
              </div>
            </div>
          </div>
          <button className="cta">
            Join the next meetup!
          </button>
        </main>
      </>
    );
}
