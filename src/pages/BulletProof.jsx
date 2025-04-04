import Header from '../components/header';
import Footer from '../components/footer';
import Military from '../components/military';
import BulletHero from '../components/bulletHero';
import ArchiLocation from '../components/archiLocation';
import BulletSec from '../components/bulletPremier';
import BulletCore from '../components/bulletCore';

function BulletProof() {
  return (
    <div>
      <Header />
      <BulletHero />
      <BulletSec />
      <BulletCore />
      <ArchiLocation />
      <Military />
      <Footer />
    </div>
  )
}

export default BulletProof
