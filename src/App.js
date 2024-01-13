import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import SpecialtiesSection from './components/SpecialtiesSection';
import Footer from './components/Footer';
import FeedBack from './components/FeedBack';


function App() {
  return (
    <div className="App">
      <NavBar />
      <SpecialtiesSection />
      <About />
      {/* <FeedBack/> */}
      <Footer />
    </div>
  );
}

export default App;
