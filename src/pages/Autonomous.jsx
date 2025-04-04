import Header from '../components/header';
import Footer from '../components/footer';
import Military from '../components/military';
import ArchiLocation from '../components/archiLocation';
import AutoSec from '../components/autoSec';
import WarHorseCore from '../components/warHorseCore';
import AutoHero from '../components/autoHero';
import AutoHero2 from '../components/autoHero2';
import AutoCore from '../components/autoCore';

function Autonomous() {
  return (
    <div>
      <Header />
      <AutoHero />
      <AutoSec />
      <AutoHero2 />
      <AutoCore />
      <ArchiLocation />
      <Military />
      <Footer />
    </div>
  )
}

export default Autonomous
