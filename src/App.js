import Home from "./pages/home/home.jsx"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer.jsx";
import Portfolio from "./pages/portfolio/portfolio.jsx";
import './App.css';
import ContactUs from "./pages/contactUs/contactUs.jsx";
import ProjectDetail from "./pages/projectDetail/projectDetail.jsx";
import ScrollToTop from "./utils/scrollToTop.jsx";
import ServicesPage from "./pages/services/servicesPage.jsx"
import ServiceMainPage from "./pages/services/serviceMainPage.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/services" element={<ServiceMainPage />} />
          <Route path="/services/:serviceSlug" element={<ServicesPage />} />
          <Route path="/projectDetail/:projectSlug" element={<ProjectDetail />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
