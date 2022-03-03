import Home from './pages/Home';
import AboutMe from "./pages/AboutMe"
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer'
import { ParallaxProvider  } from 'react-scroll-parallax';

function App() {
 

  return (
    <>
    <ParallaxProvider>
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
    </ParallaxProvider>
    </>
  );

}

export default App;
