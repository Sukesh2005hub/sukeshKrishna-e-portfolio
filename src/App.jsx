import { internshipsList, leadershipList } from './data/portfolioData';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechnicalSkills from './components/TechnicalSkills';
import Projects from './components/Projects';
import Internships from './components/Internships';
import Leadership from './components/Leadership';
import SoftSkills from './components/SoftSkills';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <TechnicalSkills />
      <Projects />
      {internshipsList && internshipsList.length > 0 && <Internships />}
      {leadershipList && leadershipList.length > 0 && <Leadership />}
      <SoftSkills />
      <Footer />
    </>
  );
}

export default App;
