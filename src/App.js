import "./App.css";
import Home from "./Screens/Home";
import About from "./Screens/About";
import Footer from "./Screens/Footer";
import { Route, Link, Routes } from "react-router-dom";
import NavBar from "./utils/Bar";
import logo from "./components/logo.png";
function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img width="25%" src={logo} />
        </header>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
