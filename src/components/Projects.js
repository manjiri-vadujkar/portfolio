import React from "react";

export default function Projects() {
  function disableLink() {
    alert("This link is comming soon!");
  }

  return (
    <div id="projects" className="row row-cols-1 row-cols-md-3 g-4">
      <div className="col">
        <div className="card h-100">
          <div className="card-body">
            <h5 className="card-title">Frontend Mentor Challenges</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <a
                  href="https://manjiri-vadujkar.github.io/NFT-Preview-Card/"
                  target="__blank"
                >
                  NFT Card
                </a>
              </li>
              <li className="list-group-item">
                <a
                  href="https://manjiri-vadujkar.github.io/QR-Code-Component/"
                  target="__blank"
                >
                  QR Code Component
                </a>
              </li>
              <li className="list-group-item">
                <a
                  href="https://manjiri-vadujkar.github.io/FrontendMentor/"
                  target="__blank"
                >
                  Stats Card
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <div className="card-body">
            <h5 className="card-title">Personal Projects</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <a
                  href="https://manjiri-vadujkar.github.io/TaskList/"
                  target="__blank"
                >
                  To Do List
                </a>
              </li>
              <li className="list-group-item">
                <a
                  href="https://manjiri-vadujkar.github.io/rps-game/"
                  target="__blank"
                >
                  Rock, Paper and Scissors Game
                </a>
              </li>
              <li className="list-group-item">
                <a
                  href="https://manjiri-vadujkar.github.io/RoboFriends/"
                  target="__blank"
                >
                  Robo Friends
                </a>
              </li>
              <li className="list-group-item">
                <a
                  href="https://manjiri-vadujkar.github.io/InternshipWebAppProject/index.html"
                  target="__blank"
                >
                  Pet Store Sample Website
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <div className="card-body">
            <h5 className="card-title">Full Stack Projects</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <a href="https://youtu.be/b_fCrDnkkwQ" target="__blank">
                  Fables: An Audiobook App
                </a>
              </li>
              <li className="list-group-item">
                <a
                  href="https://youtu.be/VvFZtYcM3kQ"
                  target="__blank"
                  //className="comming-soon"
                  //onClick={disableLink}
                >
                  Arogya: Ayurvedic Healthcare Webapp
                </a>
              </li>
              <li className="list-group-item">
                <a href="https://youtu.be/jZQslcyLXO8" target="__blank">
                  Face Recognition Webapp
                </a>
              </li>
              <li className="list-group-item">
                <a
                  href="#projects"
                  // target="__blank"
                  className="comming-soon"
                  onClick={disableLink}
                >
                  College Placement Webapp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
