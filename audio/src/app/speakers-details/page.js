import React from 'react'
import './styles1.modules.scss'


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
                        <h1>zx9 speaker</h1>
                        <p>
                            Upgrade your sound system with the all new ZX9 active speaker. 
                            It’s a bookshelf speaker system that offers truly wireless 
                            connectivity -- creating new possibilities for more pleasing 
                            and practical audio setups.
                        </p>

                        <h2 className="pricing">$ 4,500</h2>
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
                                Connect via Bluetooth or nearly any wired source. 
                                This speaker features optical, digital coaxial, USB Type-B, 
                                stereo RCA, and stereo XLR inputs, allowing you to have up to five wired 
                                source devices connected for easy switching. Improved bluetooth technology offers near lossless 
                                audio quality at up to 328ft (100m).
                            </p>

                            <p className="second-paragraph">
                                MDiscover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. 
                                Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. 
                                You’ll be able to enjoy equal sound quality whether in a large room or small den. 
                                Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.
                            </p>
                        </div>

                        <div className="items-section">
                        <h1>in the box</h1>
                            <ul>
                                <li><span>2x</span> Speaker Unit</li>
                                <li><span>2x</span> Speaker Cloth Panel</li>
                                <li><span>1x</span> User Manual</li>
                                <li><span>1x</span> 3.5mm 10m Audio Cable</li>
                                <li><span>1x</span> 10m Optical Cable</li>
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
                                <h1>zx7 speaker</h1>
                                <button>see product</button>
                            </div>
                            <div className="product-link2">
                                <div className="link-image2"></div>
                                <h1>xx99 mark i</h1>
                                <button>see product</button>
                            </div>
                            <div className="product-link3">
                                <div className="link-image3"></div>
                                <h1>xx59</h1>
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
