// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutSection from "./components/AboutSection";
import PlantSection from "./components/PlantSection";
import ContactSection from "./components/ContactSection";
import LearnSection from "./components/LearnSection";
import Navbar from "./components/Navbar"; // You must have this component
import Footer from "./components/Footer"; // You must have this component

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <AboutSection />
            </Layout>
          }
        />
        <Route
          path="/plants"
          element={
            <Layout>
              <PlantSection />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <ContactSection />
            </Layout>
          }
        />
        <Route
          path="/learn"
          element={
            <Layout>
              <LearnSection />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
