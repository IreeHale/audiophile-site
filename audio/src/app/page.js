import Image from 'next/image'

export default function Home() {
  return (
    <body>
      <div className="container-one">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">audiophile</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link" aria-current="page" href="#">Home</a>
                <a className="nav-link" href="#">headphones</a>
                <a className="nav-link" href="#">speakers</a>
                <a className="nav-link" href="#">earphones</a>
                <a className="nav-link" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16"><path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg></a>
              </div>
            </div>
          </div>
        </nav>
        <div className="divider-line"></div>
        <div className="product-image">
            <div className="product-intro">
              <h2>new product</h2>
              <h1>xx99 mark ii headphones</h1>
              <p>Experience natural, lifelike and exceptional build quality made for the passionate music enthusiast.</p>
              <button>see product</button>
            </div>
            <Image 
              src="/image-hero.jpg" 
              alt="hero image intro"
              width={1366}
              height={700}
              />
        </div>
      </div>
      <div className="container-two">
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
                <a className="quick-link"><h2>Shop <span>&gt;</span></h2></a>
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
                <a className="quick-link"><h2>Shop <span>&gt;</span></h2></a>
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
        <div className="speaker-container">
          <Image 
            className="speaker-section"
            src="/zyro-image.png"
            height={750}
            width={750}
            quality={80}
            alt="studio speaker image"
          />
          <div className="speaker-cta">
            <h1>zx9 speaker</h1>
            <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
            <button>see product</button>
          </div>
        </div>
        <div className="second-speaker">
          <div className="speaker2-section">
            <h1>zx7 speaker</h1>
            <button>see product</button>
          </div>
        </div>
        <div className="earphones-section row">
          <div className="earphones-image"></div>
          <div className="earphones-cta">
            <h1>yx1 earphones</h1>
            <button>see product</button>
          </div>
        </div>

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
          />
        </div>
        <div className="footer">
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="#">audiophile</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Headphones</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">speakers</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">earphones</a>
                </li>
              </ul>
            </div>
          </nav>
          <p className="conclusion">Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
          <p className="copyright">Copyright 2024. All Rights Reserved</p>
        </div>        
      </div>
    </body>
  )
}
