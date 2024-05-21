
import './App.css';
import Background from './components/background';
import Navbar from './components/navbar';
import AboutMe from './components/about'
import ExperienciaProfesional from './components/ExperienciaProfesional'
import Projects from './components/projects'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <Background/>
      <Navbar/>
      <AboutMe/>
      <ExperienciaProfesional/>
      <Projects/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
