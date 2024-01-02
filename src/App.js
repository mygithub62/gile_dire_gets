import React from "react";
import { About, Footer, Header, Skills, Testimonial, Work } from "./container"; // Check this import path
import Navbar from "./components/Navbar/Navbar";
import "./App.scss";

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    <Testimonial />
    <Footer />
  </div>
);

export default App;
