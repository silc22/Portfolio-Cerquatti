import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import AboutMe from "./pages/AboutMe"

function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutme" element={<AboutMe/>} />
      </Routes>
    </Router>
    </>
    
  );

}

export default App;
