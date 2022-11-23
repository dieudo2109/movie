import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {  Routes, Route } from "react-router-dom";
import SearchMovie from './components/SearchMovie';
import Footer from './components/Footer';
function App() {
  return (
    <>
     <Navbar/>
    <Routes>
     <Route exact path="/" element={<Home/>} />
     <Route path='/search' element={<SearchMovie/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
