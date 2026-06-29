import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop";
import ScrollAnimations from "./components/ScrollAnimations";

import Home from "./pages/Home";
import Therapies from "./pages/Therapies";
import TherapyDetail from "./pages/TherapyDetail";
import Philosophy from "./pages/Philosophy";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {loading && <Loader />}

      <ScrollToTop />
      <ScrollAnimations />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terapias" element={<Therapies />} />
        <Route path="/terapias/:slug" element={<TherapyDetail />} />
        <Route path="/filosofia" element={<Philosophy />} />
        <Route path="/cursos" element={<Courses />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}