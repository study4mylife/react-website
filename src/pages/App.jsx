import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from '../components/Navbar'
import Home from './Home'
import Login from "./Login";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;