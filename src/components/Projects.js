import React from "react";

export default function Projects() {
  return (
    <div id="projects" className="row row-cols-1 row-cols-md-3 g-4">
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
  );
}
