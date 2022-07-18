import "./App.css";
import {
  Home,
  SignIn,
  SignUp,
  ListFlight,
  Booking,
  ReviewBooking,
} from "./pages";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Payment from "./pages/payment/Payment";
import {NewsLetter} from "./components/NewsLetter";

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
          <Route path="/booking" element={<Booking />} />
          <Route path="/reviewbooking" element={<ReviewBooking />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </Router>
      <NewsLetter/>
      <Footer />
    </div>
  );
}

export default App;
