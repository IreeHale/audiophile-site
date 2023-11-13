import React from 'react'
import './styles.modules.scss'


//Components
import Navbar from '../components/Navbar'
import ShopLinks from '../components/ShopLinks'
import BestGear from '../components/BestGear'
import Footer from '../components/Footer'

export default function details() {
  return (
    <body>
        <div className="container-one">
            <Navbar />
        </div>
        <div className="container-two">
            <div className="studio2-headphones">
            <button className="go-back">Go Back</button>
                <div className="studio2-image"></div>
                    <div className="studio2-info">
                        <h2>new product</h2>
                        <h1>yx1 wireless earphones</h1>
                        <p>
                            Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless 
                            Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise 
                            cancellation feature.
                        </p>

                        <h2 className="pricing">$ 599</h2>
                        <button className="add-to-cart">add to cart</button>
                        <div className="amount-section">
                            <button className="subtract">-</button>
                            <input />
                            <button className="add">+</button>
                        </div>
                    </div>

                    <div className="in-the-box-section row">
                        <div className="features-section">
                            <h1>features</h1>
                            <p className="first-paragraph">
                                Experience unrivalled stereo sound thanks to innovative acoustic technology. 
                                With improved ergonomics designed for full day wearing, 
                                these revolutionary earphones have been finely crafted to provide you with the perfect fit, 
                                delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.
                            </p>

                            <p className="second-paragraph">
                                The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants 
                                built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging 
                                case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now 
                                available in an all new white and grey color scheme as well as the popular classic black.
                            </p>
                        </div>

                        <div className="items-section">
                        <h1>in the box</h1>
                            <ul>
                                <li><span>2x</span> Earphone Unit</li>
                                <li><span>6x</span> Multi-size Earplugs</li>
                                <li><span>1x</span> User Manual</li>
                                <li><span>1x</span> USB-C Charging Cable</li>
                                <li><span>1x</span> Travel Pouch</li>
                            </ul>
                        </div>
                    </div>
                    <div className="preview-section d-flex flex-wrap">
                        <div className="mini-column d-flex flex-column">
                            <div className="gallery-pic1"></div>
                            <div className="gallery-pic2"></div>
                        </div>
                        <div className="gallery-pic3"></div>
                    </div>
                    <div className="other-products">
                        <h1>you may also like</h1>
                        <div className="also-like row">
                            <div className="product-link1">
                                <div className="link-image1"></div>
                                <h1>xx99 mark i</h1>
                                <button>see product</button>
                            </div>
                            <div className="product-link2">
                                <div className="link-image2"></div>
                                <h1>xx59</h1>
                                <button>see product</button>
                            </div>
                            <div className="product-link3">
                                <div className="link-image3"></div>
                                <h1>zx9 speaker</h1>
                                <button>see product</button>
                            </div>
                        </div>
                    </div>
                </div>
                <ShopLinks />
                <BestGear />
                <Footer />
            </div>
    </body>
  )
}
