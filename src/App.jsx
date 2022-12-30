import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
import Navbar from "./Components/Navbar";
import Header  from './Components/Header';
import MiniAreaContact from './Components/MiniAreaContact';
import ScrollDown from './Components/ScrollDown';
import About from './Components/About';
import Skills from './Components/Skills';
import Works from './Components/Works';
import Footer from './Components/Footer';
function App() {
  AOS.init();
  return (
    <>
      <Navbar />
      <Header />
      <MiniAreaContact />
      <ScrollDown />
      <About />
      <Skills />
      <Works />
      <Footer />
    </>
  );
}

export default App;
