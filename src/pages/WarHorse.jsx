import Header from '../components/header';
import Footer from '../components/footer';
import Military from '../components/military';
import WarHero from '../components/warHorseHero';
import ArchiLocation from '../components/archiLocation';
import WarHorseSec from '../components/warHorse';
import WarHorseCore from '../components/warHorseCore';

function WarHorse() {
  return (
    <div>
      <Header />
      <WarHero />
      <WarHorseSec />
      <WarHorseCore />
      <ArchiLocation />
      <Military />
      <Footer />
    </div>
  )
}

export default WarHorse
