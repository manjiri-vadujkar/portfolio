import backgroundImg from "./Images/Coding2.jpeg";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
// import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import "./App.css";

function App() {
  const handleScroll = (event) => {
    console.log("offset: " + event.offset().top);
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark navbar-expand-lg ">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link" aria-current="page" href="#">
                Home
              </a>
              <a className="nav-link" href="#">
                About Me
              </a>
              <a className="nav-link" href="#">
                My Projects
              </a>
              <a className="nav-link">Education & Experience</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="parallaxWrapper">
        <div className="parallaxImg">
          <div className="headings">
            <h1> Manjiri Vadujkar</h1>
            <h2> Web Developer </h2>
            <a className="linkBtn" href="">
              View My Work
            </a>
          </div>
        </div>
        <section className="personalInfo" onScroll={handleScroll}>
          <div className="aboutMe">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="..."
                    className="img-fluid rounded-start"
                    alt="..."
                  ></img>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Frontend Mentor Projects</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">An item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Personal</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">An item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">An item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="footer text-center text-white">
          <div className="container pt-4">
            <section className="mb-4">
              <a
                className="btn btn-link btn-floating btn-lg text-white m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="white"
              >
                <i>
                  <FontAwesomeIcon icon={faLinkedin} />
                </i>
              </a>
              <a
                className="btn btn-link btn-floating btn-lg text-white m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i>
                  <FontAwesomeIcon icon={faGithub} />
                </i>
              </a>
            </section>
          </div>
          <div className="text-center text-white p-3">
            © 2022 Copyright:
            <a className="text-white" href="#">
              Manjiri Vadujkar
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
