import Header from '../components/header';
import Footer from '../components/footer';
import Military from '../components/military';
import ArchiHero from '../components/archiHero';
import ArchiLocation from '../components/archiLocation';
import VigilPremier from '../components/vigilancePremier';
import CoreFeatures from '../components/coreFeatures';

function VigilanceTowers() {
  return (
    <div>
      <Header />
      <ArchiHero />
      <VigilPremier />
      <CoreFeatures />
      <ArchiLocation />
      <Military />
      <Footer />
    </div>
  )
}

export default VigilanceTowers
