import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';

function App() {
  return (
    <div>
      <Navbar />
      <Hero style={{ marginTop: '500px' }} />
    </div>
  );
}

export default App;
