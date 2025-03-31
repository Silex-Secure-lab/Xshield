import Header from '../components/header';
import Footer from '../components/footer';
import Military from '../components/military';
import CivilHero from '../components/civilHero';
import ArchiLocation from '../components/archiLocation';
import CivilPremier from '../components/civilPremier';
import CoreFeatures from '../components/coreFeatures';

function CivilianVehicle() {
  return (
    <div>
      <Header />
      <CivilHero />
      <CivilPremier />
      <ArchiLocation />
      <Military />
      <Footer />
    </div>
  )
}

export default CivilianVehicle
