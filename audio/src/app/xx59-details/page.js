import React from 'react'
import './styles3.modules.scss'


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
                        <h1>xx59 headphones</h1>
                        <p>
                            Enjoy your audio almost anywhere and customize it to your specific tastes 
                            with the XX59 headphones. The stylish yet durable versatile wireless headset 
                            is a brilliant companion at home or on the move.
                        </p>

                        <h2 className="pricing">$ 899</h2>
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
                                These headphones have been created from durable, 
                                high-quality materials tough enough to take anywhere. 
                                Its compact folding design fuses comfort and minimalist style making it perfect for travel. 
                                Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.
                            </p>

                            <p className="second-paragraph">
                                More than a simple pair of headphones, 
                                this headset features a pair of built-in microphones for clear, 
                                hands-free calling when paired with a compatible smartphone. 
                                Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. 
                                Regardless of how you use the XX59 headphones, 
                                you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.
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
                                <a href="xx99-mark2-details"><button>see product</button></a>
                            </div>
                            <div className="product-link2">
                                <div className="link-image2"></div>
                                <h1>xx99 mark i</h1>
                                <a href="xx99-mark1-details"><button>see product</button></a>
                            </div>
                            <div className="product-link3">
                                <div className="link-image3"></div>
                                <h1>zx9 speaker</h1>
                                <a href="zx9-speaker-details"><button>see product</button></a>
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
