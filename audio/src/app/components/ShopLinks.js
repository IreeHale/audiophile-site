import React from 'react'
import Image from 'next/image'

export default function ShopLinks() {
  return (
    <div className="link-container row">
            <div className="link">
                <div className="shop-link">
                    <Image 
                    className="headphone-image" src="/image-xx99-mark-one-headphones.png" 
                    height={150}
                    width={150}
                    alt=" headphones link"
                    />
                    <h1>headphones</h1>
                    <a className="quick-link" href="/headphones"><h2>Shop <span>&gt;</span></h2></a>
                </div>
            </div>
            <div className="link">
                <div className="shop-link">
                    <Image 
                        className="speaker-image"
                        src="/image-zx9-speaker.png"
                        height={150}
                        width={150}
                        alt="speaker link photo"
                    />
                    <h1>speakers</h1>
                    <a className="quick-link" href="/speakers"><h2>Shop <span>&gt;</span></h2></a>
                </div>
            </div>
            <div className="link">
                <div className="shop-link">
                    <Image 
                        className="earphones-image"
                        src="/image-yx1-earphones.png"
                        height={150}
                        width={150}
                        alt="speaker link photo"
                    />
                    <h1>earphones</h1>
                    <a className="quick-link"><h2>Shop <span>&gt;</span></h2></a>
                </div>
            </div>
        </div>
    )
}
