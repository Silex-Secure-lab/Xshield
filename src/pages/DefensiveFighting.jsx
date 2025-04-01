import Header from '../components/header';
import Footer from '../components/footer';
import Military from '../components/military';
import ArchiHero from '../components/archiHero';
import ArchiLocation from '../components/archiLocation';
import DefenseSystem from '../components/defensiveSystems';

function Defense() {
  return (
    <div>
      <Header />
      <ArchiHero />
      <DefenseSystem />
      <ArchiLocation />
      <Military />
      <Footer />
    </div>
  )
}

export default Defense
