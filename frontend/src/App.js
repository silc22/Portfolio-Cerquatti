import Home from './pages/Home';
import AboutMe from "./pages/AboutMe"
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer'

function App() {


  return (
    <>
    <div>
      <div>
        <Header/>
      </div>
        <Home/>
        <AboutMe/>
        <Skills/>
        <Contact/>
        <Footer/>
    </div>
    </>
    
  );

}

export default App;
