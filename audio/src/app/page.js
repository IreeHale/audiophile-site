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
              <a><h2>Shop <span>&gt;</span></h2></a>
            </div>
          </div>
          <div className="link">
            <div className="shop-link">
              <a><h2>Shop <span>&gt;</span></h2></a>
            </div>
          </div>
          <div className="link">
            <div className="shop-link">
              <a><h2>Shop <span>&gt;</span></h2></a>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}
