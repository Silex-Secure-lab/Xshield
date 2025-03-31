import Header from '../components/header';
import Footer from '../components/footer';
import Military from '../components/military';
import ServiceHero from '../components/serviceHero';
import MenuServices from '../components/menuServices';
import ServicePremier from '../components/servicePremier';
import ServiceHeroBottom from '../components/serviceHeroBottom';

function Services() {
  return (
    <div>
      <Header />
      <ServiceHero />
      <MenuServices />
      <ServicePremier />
      <ServiceHeroBottom />
      <Military />
      <Footer />
    </div>
  )
}

export default Services
