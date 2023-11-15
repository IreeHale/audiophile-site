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
            <a href="/speakers"><button className="go-back">Go Back</button></a>
                <div className="studio2-image"></div>
                    <div className="studio2-info">
                        <h1>zx7 speaker</h1>
                        <p>
                            Stream high quality sound wirelessly with minimal to no loss. 
                            The ZX7 speaker uses high-end audiophile components that represents 
                            the top of the line powered speakers for home or studio use.
                        </p>

                        <h2 className="pricing">$ 3,500</h2>
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
                                Reap the advantages of a flat diaphragm tweeter cone. 
                                This provides a fast response rate and excellent high frequencies that 
                                lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that 
                                produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.
                            </p>

                            <p className="second-paragraph">
                                The ZX7 speaker is the perfect blend of stylish design and high performance. 
                                It houses an encased MDF wooden enclosure which minimises acoustic resonance. 
                                Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. 
                                Switch input sources and control volume at your finger tips with the included wireless remote. 
                                This versatile speaker is equipped to deliver an authentic listening experience.
                            </p>
                        </div>

                        <div className="items-section">
                        <h1>in the box</h1>
                            <ul>
                                <li><span>2x</span> Speaker Unit</li>
                                <li><span>2x</span> Speaker Cloth Panel</li>
                                <li><span>1x</span> User Manual</li>
                                <li><span>1x</span> 3.5mm 7.5m Audio Cable</li>
                                <li><span>1x</span> 7.5m Optical Cable</li>
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
                                <h1>zx9 speaker</h1>
                                <a href="/zx9-speaker-details"><button>see product</button></a>
                            </div>
                            <div className="product-link2">
                                <div className="link-image2"></div>
                                <h1>xx99 mark i</h1>
                                <a href="/xx99-mark1-details"><button>see product</button></a>
                            </div>
                            <div className="product-link3">
                                <div className="link-image3"></div>
                                <h1>xx59</h1>
                                <a href="/xx59-details"><button>see product</button></a>
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
