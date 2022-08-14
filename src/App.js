import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/jquery/dist/jquery.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Education from "./components/Education";
import Parallax from "./components/Parallax";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Parallax></Parallax>

      <section className="personalInfo">
        <AboutMe></AboutMe>
        <Projects></Projects>
        <Education></Education>
      </section>

      <Footer></Footer>
    </div>
  );
}

export default App;
