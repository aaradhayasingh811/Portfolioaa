import './App.css';

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';



import Home from './Components/Home';
import Project from './Components/Project';
import OnlyContact from './Components/OnlyContact';
import OnlyAbout from './Components/OnlyAbout';

function App() {



  return (
   <>
   < BrowserRouter>
   <Routes>
   <Route exact path="/" element={<Home />} />
   <Route exact path="/project" element={<Project />} />
   <Route exact path="/contact" element={<OnlyContact />} />
   <Route exact path="/about" element={<OnlyAbout />} />

   </Routes>
   
   </BrowserRouter>
   


   </>
  );
}

export default App;
