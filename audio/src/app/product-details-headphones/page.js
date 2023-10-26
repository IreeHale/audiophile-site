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
                    </div>
            </div>
        </div>
    </body>
  )
}
