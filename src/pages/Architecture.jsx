import Header from '../components/header';
import Footer from '../components/footer';
import Military from '../components/military';
import ArchiHero from '../components/archiHero';
import ArchiPremier from '../components/archiPremier';
import ArchiDiscover from '../components/archiDiscover';
import ArchiLocation from '../components/archiLocation';

function Architecture() {
  return (
    <div>
      <Header />
      <ArchiHero />
      <ArchiPremier />
      <ArchiDiscover />
      <ArchiLocation />
      <Military />
      <Footer />
    </div>
  )
}

export default Architecture
