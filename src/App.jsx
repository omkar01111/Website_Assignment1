import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import ContactUs from "./Pages/ContactUs";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Services" element={<Services />} />
         
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
