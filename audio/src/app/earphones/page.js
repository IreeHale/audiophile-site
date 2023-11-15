import React from 'react'
import './styles.modules.scss'

//Components
import Navbar from '../components/Navbar'
import ShopLinks from '../components/ShopLinks'
import BestGear from '../components/BestGear'
import Footer from '../components/Footer'



export default function earphones() {
  return (
    <body>
        <div className="container-one">
            <Navbar />
            <h1>earphones</h1>
        </div>
        <div className="container-two">
                <div className="studio2-headphones">
                    <div className="studio2-image"></div>
                    <div className="studio2-info">
                        <h2>new product</h2>
                        <h1>yx1 wireless earphones</h1>
                        <p>
                            Tailor your listening experience with bespoke dynamic drivers from the
                            new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in
                            noisy environments with it's active noise cancellation feature.
                        </p>
                        <a href="/yx1-earphones-details"><button>see product</button></a>
                    </div>
                </div>
                <ShopLinks />
                <BestGear />
                <Footer />
        </div>
    </body>
  )
}

