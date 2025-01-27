import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AnimatedRoutes from "./AnimatedRoutes";


export default function App() {
  return (
    <Router>
      <Navbar />
        <AnimatedRoutes />
      <Footer />
    </Router>
  );
}