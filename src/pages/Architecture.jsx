import Header from '../components/header';
import Footer from '../components/footer';
import Military from '../components/military';
import ArchiHero from '../components/archiHero';
import ArchiPremier from '../components/archiPremier';
import ArchiDiscover from '../components/archiDiscover';

function Architecture() {
  return (
    <div>
      <Header />
      <ArchiHero />
      <ArchiPremier />
      <ArchiDiscover />
      <Military />
      <Footer />
    </div>
  )
}

export default Architecture
