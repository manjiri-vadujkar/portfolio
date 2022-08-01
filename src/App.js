import backgroundImg from "./Images/Coding2.jpeg";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
// import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
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

      <div className="mainDiv">
        <img src={backgroundImg} alt="Main" width="100%" max-height="90%"></img>
        <div className="headings">
          <h1> Manjiri Vadujkar</h1>
          <h2> Web Developer </h2>
        </div>
      </div>

      <div className="aboutMe">
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="..." class="img-fluid rounded-start" alt="..."></img>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">Frontend Mentor Projects</h5>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">Personal</h5>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <footer class="text-center text-white">
        <div class="container pt-4">
          <section class="mb-4">
            <a
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i>
                <FontAwesomeIcon icon={faLinkedin} />
              </i>
            </a>
            <a
              class="btn btn-link btn-floating btn-lg text-dark m-1"
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
        <div class="text-center text-dark p-3">
          © 2022 Copyright:
          <a class="text-dark" href="#">
            Manjiri Vadujkar
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
