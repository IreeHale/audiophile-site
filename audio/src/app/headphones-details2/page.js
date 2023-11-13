import React from 'react'
import './styles2.modules.scss'


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
            <a className="go-back" href="/headphones">Go Back</a>
                <div className="studio2-image"></div>
                    <div className="studio2-info">
                        <h1>xx99 mark I headphones</h1>
                        <p>
                            As the gold standard for headphones, 
                            the classic XX99 Mark I offers detailed and accurate audio reproduction 
                            for audiophiles, mixing engineers, and music aficionados alike in studios 
                            and on the go. 
                        </p>

                        <h2 className="pricing">$ 1,750</h2>
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
                                As the headphones all others are measured against, 
                                the XX99 Mark I demonstrates over five decades of audio expertise, 
                                redefining the critical listening experience. This pair of closed-back headphones 
                                are made of industrial, aerospace-grade materials to emphasize durability at a 
                                relatively light weight of 11 oz.
                            </p>

                            <p className="second-paragraph">
                            From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element,
                            the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers 
                            up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. 
                            For connectivity, a specially tuned cable is included with a balanced gold connector.
                            </p>
                        </div>

                        <div className="items-section">
                        <h1>in the box</h1>
                            <ul>
                                <li><span>1x</span> Headphone Unit</li>
                                <li><span>2x</span> Replacement Earcups</li>
                                <li><span>1x</span> User Manual</li>
                                <li><span>1x</span> 3.5mm 5m Audio Cable</li>
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
                                <h1>xx99 mark ii</h1>
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
