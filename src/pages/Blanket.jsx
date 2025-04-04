import Header from '../components/header';
import Footer from '../components/footer';
import Military from '../components/military';
import ArchiLocation from '../components/archiLocation';
import ShieldSec from '../components/shieldSec';
import ArchiHero from '../components/archiHero';
import ShieldCore from '../components/shieldCore';
function Blanket() {
  return (
    <div>
      <Header />
      <ArchiHero />
      <ShieldSec />
      <ShieldCore />
      <ArchiLocation />
      <Military />
      <Footer />
    </div>
  )
}

export default Blanket
