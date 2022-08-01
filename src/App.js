import backgroundImg from "./Images/Coding2.jpeg";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="#">
            Navbar
          </a> */}
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

      <div class="row row-cols-1 row-cols-md-3 g-4">
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
    </div>
  );
}

export default App;
