import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AnimatedRoutes from "./AnimatedRoutes";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";


export default function App() {
  return (
    <Router>
      <Navbar />
        <AnimatedRoutes />
      <Footer />
      <Analytics />
      <SpeedInsights />
    </Router>
  );
}