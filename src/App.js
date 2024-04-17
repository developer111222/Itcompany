import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,Route, Link } from "react-router-dom";
import Header from './component/header/Header';
import Home from './component/Home/Home';
import Footer from './component/footer/Footer';
import About from './component/about/About';
import Contact from './component/contact/Contact';

function App() {
  return (
   <>
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      </Routes>
      </BrowserRouter>
      <Footer/>
   </>

  );
}

export default App;
