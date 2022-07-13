import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./CSS/App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";
import Home_Search_Genre_page from "./pages/Home_Search_Genre_page";
import Notfound from "./components/Notfound";

import Moviedetails from "./components/Moviedetails";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home_Search_Genre_page />} />
          <Route
            path="/search/:searchTerm"
            element={<Home_Search_Genre_page />}
          />
          <Route path="/genre/:genreIds" element={<Home_Search_Genre_page />} />

          <Route path="/movie/:movieId" element={<Moviedetails />} />

          <Route path="*" element={<Notfound />} />


          
        </Routes>
      </Router>
      <Footer />
      <ScrollTop />
    </div>
  );
}

//routing

// context wrap

export default App;
