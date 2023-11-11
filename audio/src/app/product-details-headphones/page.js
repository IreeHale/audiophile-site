import React from 'react'
import './styles1.modules.scss'


//Components
import Navbar from '../components/Navbar'

export default function details() {
  return (
    <body>
        <div className="container-one">
            <Navbar />
        </div>
        <div className="container-two">
            <div className="studio2-headphones">
                <div className="studio2-image"></div>
                    <div className="studio2-info">
                        <h2>new product</h2>
                        <h1>xx99 mark II headphones</h1>
                        <p>
                            The new XX99 Mark II is the pinnacle of pristine audio. 
                            It redefines your premium headphones experience by reproducing 
                            the balanced depth and precision of studio-quality sound.
                        </p>

                        <h2 className="pricing">$ 2,999</h2>
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
                                Featuring a genuine leather head strap and premium earcups, 
                                these headphones deliver superior comfort for those who like to enjoy endless listening. 
                                It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, \
                                the auto on/off and pause features ensure that you’ll never miss a beat.
                            </p>

                            <p className="second-paragraph">
                                The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. 
                                It lets you enjoy your audio in peace, 
                                but quickly interact with your surroundings when you need to. 
                                Combined with Bluetooth 5.0 compliant connectivity and 17 hour battery life, 
                                the XX99 Mark II headphones gives you superior sound, cutting-edge technology, 
                                and a modern design aesthetic.
                            </p>
                        </div>

                        <div className="items-section">
                        <h1>in the box</h1>
                            <ul>
                                <li><span>1x</span> Headphone Unit</li>
                                <li><span>2x</span> Replacement Earcups</li>
                                <li><span>1x</span> User Manual</li>
                                <li><span>1x</span> 3.5mm 5m Audio Cable</li>
                                <li><span>1x</span> Travel Bag</li>
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
            </div>
    </body>
  )
}
