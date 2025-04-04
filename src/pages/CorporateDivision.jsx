import Header from '../components/header';
import Footer from '../components/footer';
import Military from '../components/military';
import ArchiHero from '../components/archiHero';
import ArchiLocation from '../components/archiLocation';
import CorporateDivision from '../components/corporateDivision';
import CorporateGreat from '../components/corporateGreat';

function Corporate() {
  return (
    <div>
      <Header />
      <ArchiHero />
      <CorporateDivision />
      <CorporateGreat />
      <ArchiLocation />
      <Military />
      <Footer />
    </div>
  )
}

export default Corporate
