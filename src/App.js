import Header from "./myComponents/Header"
import Home from "./myComponents/Home"
import About from "./myComponents/About"
import Contact from "./myComponents/Contact"
import Footer from "./myComponents/Footer"
import Explore from "./myComponents/Explore"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (



    <Router>

      <Header />

      <Routes>

        <Route exact path="/" element={<Home />} />

        <Route exact path="/about" element={<About />} />

        <Route exact path="/contact" element={<Contact />} />

        <Route exact path="/explore" element={<Explore />} />
          

        

      </Routes>

      <Footer />

    </Router>

  );
}

export default App;
