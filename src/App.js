import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import SearchMovie from "./components/SearchMovie";
import Footer from "./components/Footer";
import MovieTrailer from "./components/MovieTrailer";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/search" element={<SearchMovie />} />
        <Route path="/trailer/:id" element={<MovieTrailer />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
