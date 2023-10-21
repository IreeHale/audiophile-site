import Image from 'next/image'
import React from 'react'

//Component
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BestGear from './components/BestGear'
import ShopLinks from './components/ShopLinks'



export default function Home() {
  return (
    <body>
      <div className="container-one">
        <Navbar />
        <div className="product-image">
            <div className="product-intro">
              <h2>new product</h2>
              <h1>xx99 mark ii headphones</h1>
              <p>Experience natural, lifelike and exceptional build quality made for the passionate music enthusiast.</p>
              <button>see product</button>
            </div>
            <Image 
              src="/image-hero.jpg" 
              alt="hero image intro"
              width={1366}
              height={700}
              />
        </div>
      </div>
      <div className="container-two">
        <ShopLinks />
        <div className="speaker-container">
          <Image 
            className="speaker-section"
            src="/zyro-image.png"
            height={750}
            width={750}
            quality={80}
            alt="studio speaker image"
          />
          <div className="speaker-cta">
            <h1>zx9 speaker</h1>
            <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
            <button>see product</button>
          </div>
        </div>
        <div className="second-speaker">
          <div className="speaker2-section">
            <h1>zx7 speaker</h1>
            <button>see product</button>
          </div>
        </div>
        <div className="earphones-section row">
          <div className="earphones-image"></div>
          <div className="earphones-cta">
            <h1>yx1 earphones</h1>
            <button>see product</button>
          </div>
        </div>
        <BestGear />
        <Footer />        
      </div>
    </body>
  )
}
