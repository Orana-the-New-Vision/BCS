import "./App.css";
import Home from "./Screens/home";
import About from "./Screens/About";
import Footer from "./Screens/footer";
import { Route, Link, Routes } from "react-router-dom";
import NavBar from "./utils/Bar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ marginTop: "0" }}>Better Call Saul </h1>
      </header>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
