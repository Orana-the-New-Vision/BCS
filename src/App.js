import "./App.css";
import Home from "./Screens/Home";
import About from "./Screens/About";
import Footer from "./components/Footer";
import { Route, Link, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
