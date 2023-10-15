import './styles.modules.scss'


//Components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BestGear from '../components/BestGear'
import ShopLinks from '../components/ShopLinks'

export default function headphones() {
  return (
    <body>
        <div className="container-one">
            <Navbar />
            <h1>headphones</h1>
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
                        <button>see product</button>
                    </div>
                </div>
            <div className="studio1-headphones">
                <div className="studio1-info">
                    <h1>xx99 mark I headphones</h1>
                    <p>
                        As the gold for headphones, 
                        the classic xx99 Mark I offers detailed and accurate 
                        audio reproduction for audiophiles, mixing engineers, and music aficionados 
                        alike in studios and on the go.
                    </p>
                    <button>see product</button>
                </div>
                <div className="studio1-image"></div>
            </div>
            <div className="studio-headphones">
                <div className="studio-image"></div>
                    <div className="studio-info">
                        <h2>new product</h2>
                        <h1>xx99 mark II headphones</h1>
                        <p>
                            The new XX99 Mark II is the pinnacle of pristine audio. 
                            It redefines your premium headphones experience by reproducing 
                            the balanced depth and precision of studio-quality sound.
                        </p>
                        <button>see product</button>
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
