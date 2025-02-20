import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from '../theme/theme'
import Navbar from '../components/Navbar'
import Home from './Home'
import Login from "./Login";
import Register from "./Register";

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register"element={<Register/>} ></Route>
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;