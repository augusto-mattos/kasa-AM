import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FicheLogement from "./pages/Accommodation";
import About from "./pages/About";
import Error from "./pages/Error";
import Header from "./components/header";
import Footer from "./components/footer";
import "../src/assets/styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="main-container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logement/:id" element={<FicheLogement />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
    <Footer />
  </React.StrictMode>
);
