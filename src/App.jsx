import Navbar from "./components/Navbar/Navbar"
import Navbar2 from "./components/Navbar2/Navbar2"
import Home from "./components/Home/Home"
import Events from "./components/Events/Events"
import Notification from "./components/Notification/Notification";
import Principal from "./components/Principal/Principal";
import Social from "./components/Social/Social";
import './App.css'
import Features from "./components/Features/Features";
import Gallery from "./components/Gallery/Gallery";
import Contact from "./components/Conatct/Contact";
import Footer from "./components/Footer/Footer";

function App() {

  return (
    <div className="App">
      <div className="navbarr">
        <Navbar />
        <Navbar2 />
      </div>
      <Home />
      <Events />
      <Notification />
      <Principal />
      <Social />
      <Features />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App
