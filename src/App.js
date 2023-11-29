import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Sociallinks from "./components/Sociallinks";
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>
      <Sociallinks/>
    </div>
  );
}

export default App;
