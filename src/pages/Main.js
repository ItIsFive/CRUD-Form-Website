import './Main.css'
import { Link } from 'react-router-dom'
import ScrollReveal from 'scrollreveal'
import React, { useEffect } from 'react'
import 'remixicon/fonts/remixicon.css';


function Main({children}) {
  useEffect(() => {
    ScrollReveal().reveal('.main-header', {
      distance:'10px',
      duration: 2600,
      delay: 250,
      reset: true
    });
  }, []);
  return (
      <div className="main">
        <div className="back-button">
          <Link to="/home">
            <i class="ri-home-smile-2-line"></i>
          </Link>
        </div>
        <h2 className="main-header">React <Link to='/create'>C</Link><span><Link to='/read'>R</Link></span>UD Operations</h2>
        {children}
      </div>
      
  );
}

export default Main;