import React from 'react'
import Image from 'next/image'
import '../globals.scss'


export default function BestGear() {
  return (
        <div className="mark2-headphones">
            <div className="mark2-info">
                <h1>bringing you the <span>best</span> audio gear</h1>
                <p>
                    Bringing you the best audio gear
                    Located at the heart of New York City, Audiophile is the premier store for high end headphones, 
                    earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration 
                    rooms available for you to browse and experience a wide range of our products. Stop by our store 
                    to meet some of the fantastic people who make Audiophile the best place to buy your portable 
                    audio equipment.
                </p>
            </div>
            <Image
                className="best-gear"
                src="/image-best-gear.jpg"
                height={580}
                width={520}
                alt="best gear picture"
            />
        </div>
  )
}
