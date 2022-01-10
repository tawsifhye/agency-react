
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import WhyEnver from './Components/WhyEnver';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhyEnver />
      <Services />
      <Portfolio />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
