import React, { useEffect } from 'react';
import './Home.css';
import ScrollReveal from 'scrollreveal';
import { Link } from 'react-router-dom';

function Home() {
  useEffect(() => {
    ScrollReveal().reveal('.gotxt, .goimg', {
      distance:'65px',
      duration: 2600,
      delay: 450,
      reset: true
    });
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
        <link rel="stylesheet" type="text/css" href="home.css" />
  
        <link href="https://cdn.jsdelivr.net/npm/remixicon@3.6.0/fonts/remixicon.css" rel="stylesheet" />
  
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&family=Permanent+Marker&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@1,300&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Silkscreen:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <header>
          <a href='index.html' className="logo">Studern Form</a>
          <div className="bx bx-menu" id="menu-icon"></div>
        </header>
  
        <section className="go">
          <div className="gotxt">
            <h1>Daftarkan Sekarang !!!</h1>
            <p>Daftarkan diri anda sekarang agar data aman</p>
            <Link to="/main" className="ctaa">GO<i className="ri-play-line"></i></Link>  
            <div className="media">
              <a href="https://www.instagram.com/fadhil.m._" className="ig" target="_blank"><i className="ri-instagram-line"></i></a>
              <a href="https://github.com/ItIsFive" className="git" target="_blank"><i className="ri-github-fill"></i></a>
            </div>
          </div>
  
          <div className="goimg">
            <img src="https://i.pinimg.com/564x/0f/b6/1e/0fb61e249f321d55f71f61a650a70e6a.jpg" alt="pic not loaded" />
          </div>
        </section>
      </body>
    </html>
  );
}

export default Home;