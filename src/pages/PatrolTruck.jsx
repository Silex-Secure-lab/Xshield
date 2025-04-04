import Header from '../components/header';
import Footer from '../components/footer';
import Military from '../components/military';
import PatrolHero from '../components/patrolHero';
import ArchiLocation from '../components/archiLocation';
import UpAmoured from '../components/upArmoured';
import CoreAmoured from '../components/coreArmoured';

function PatrolTruck() {
  return (
    <div>
      <Header />
      <PatrolHero />
      <UpAmoured />
      <CoreAmoured />
      <ArchiLocation />
      <Military />
      <Footer />
    </div>
  )
}

export default PatrolTruck
