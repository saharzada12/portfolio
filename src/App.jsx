import HomePage from "./components/HomePage";
import NavbarBootstrap from "./components/Navbar";
import Skills from "./components/Skills";
import "./index.css";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div className="parent">
        <NavbarBootstrap />
        <HomePage />
        <Skills />
        <Work />
        <Contact />
      </div>
    </>
  );
}

export default App;
