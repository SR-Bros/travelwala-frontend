import './App.css'
import {Home, SignIn, SignUp, ListFlight, Booking, ReviewBooking} from './pages'
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

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
          <Route path='/booking' element={<Booking/>}/>
          <Route path='/reviewbooking' element={<ReviewBooking/>}/>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
