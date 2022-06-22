import "./App.css";
import { Home, SignIn, SignUp, ListFlight } from "./pages";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FlightSearchBar from "./pages/listflights/components/FlightSearchBar";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
      <div className="App">
        <Router>
          <Navbar />
          <Provider store={store}>
            <FlightSearchBar/>
          </Provider>
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
