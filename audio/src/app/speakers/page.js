import React from 'react'
import './styles.modules.scss'
import Navbar from '../components/Navbar'
import ShopLinks from '../components/ShopLinks'
import BestGear from '../components/BestGear'
import Footer from '../components/Footer'



export default function speakers() {
  return (
    <body>
      <div className="container-one">
            <Navbar />
            <h1>speakers</h1>
        </div>
        <div className="container-two">
                <div className="studio2-headphones">
                  <div className="studio2-image"></div>
                      <div className="studio2-info">
                          <h2>new product</h2>
                          <h1>zx9 speaker</h1>
                          <p>
                            Upgrade your sound system with the all new ZX9 active
                            speaker. It's a bookshelf speaker system that offers
                            truly wireless connectivity - creating new possibilities for
                            more pleasing and practical audio setups.
                          </p>
                          <a href="/zx9-speaker-details"><button>see product</button></a>
                      </div>
                  </div>
                  <div className="studio1-headphones">
                    <div className="studio1-info">
                      <h1>zx7 speaker</h1>
                      <p>
                          Stream high quality sound wirelessly with minimal loss. The ZX7
                          bookshelf speaker uses high-end audiophile components that
                          represents the top of the line powered speakers for home or studio use.
                      </p>
                      <a href="/zx7-speaker-details"><button>see product</button></a>
                    </div>
                  <div className="studio1-image"></div>
                </div>
                <ShopLinks />
                <BestGear />
                <Footer />
      </div>
    </body>
  )
}
