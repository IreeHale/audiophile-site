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
            <ShopLinks />
            <BestGear />
            <Footer />
        </div>
    </body>
        
  )
}
