import { useState } from 'react';
import { ParallaxProvider  } from 'react-scroll-parallax';
import Home from './pages/Home';
import AboutMe from "./pages/AboutMe"
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer'
import Language from './components/Language';

function App() {
 
  const [language, setLanguage] = useState(true)


  const changeLanguage = () => {
    setLanguage(!language)
}

  
  return (
    <>
    <ParallaxProvider>
        <div>
          <div>
            <Header />
          </div>
            <div className='language__container' onClick={()=>changeLanguage()}>
              <Language language={language} />
            </div>
            <Home language={language} />
            <AboutMe language={language}/>
            <Skills language={language}/>
            <Contact language={language}/>
            <Footer/>
        </div>
    </ParallaxProvider>
    </>
  );

}

export default App;
