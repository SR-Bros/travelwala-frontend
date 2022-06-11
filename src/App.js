import "./App.css";
import { Home, SignIn, SignUp } from "./pages";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListFlight from "./pages/listflights/ListFlight";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/flight/search" element={<ListFlight />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
