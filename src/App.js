// @ts-nocheck
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import TourDetails from "./Components/TourDetails/TourDetails";
import Navbar from './Components/Navbar/Navbar';
let data = require("../src/Data/data.json");

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/city/:id" element={<TourDetails />} />
      </Routes>
    </>
  );
}

export default App;