

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Komponenter/Navbar';
import Landingpage from './Komponenter/Pages/Landingpage';
import AboutMe from './Komponenter/Pages/AboutMe';
import Projects from './Komponenter/Pages/Projects';
import CV from './Komponenter/Pages/CV';
import Footer from './Komponenter/Footer';


function App() {
  
  return (
    <>
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="" index element={<Landingpage/>} />
          <Route path="/OmMig" element={<AboutMe/>} />
          <Route path="/CV" element={<CV/>} />
          <Route path="/Portfolio" element={<Projects/>} />
        </Routes>
      <Footer/>
    </BrowserRouter>
   </> 
  );
}

export default App;
