import React from "react";

export default function Education() {
  return (
    <div id="timeline" className="detailsCard">
      <div className="experience">
        <h5 className="card-title">Experience</h5>
        <ul className="timeline-list">
          <li>
            <span className="index">1</span>
            <span className="textHeading">
              System Engineer
              <br />
            </span>
            <span className="text">Tata Consultancy Services</span>
            <br />
            <span className="text">11/2021 - 06/22, Andheri</span>

            <div class="verticalLine"></div>
          </li>
          <li>
            <span className="index">2</span>
            <span className="textHeading">
              Assistant System Engineer-Trainee
              <br />
            </span>
            <span className="text">Tata Consultancy Services</span>
            <br />
            <span className="text">07/2021 - 10/2021, Andheri</span>
          </li>
        </ul>
      </div>
      <div className="education">
        <h5 className="card-title">Education</h5>
        <ul className="timeline-list">
          <li>
            <span className="index">1</span>
            <span className="textHeading">
              B.E Computer Engineering
              <br />
            </span>
            <span className="text">
              Shivajirao S. Jondhale College Of Engineering
              <br />
            </span>
            <span className="text">07/2017 - 05/2021, Dombivli</span>
            <div class="verticalLine"></div>
          </li>
          <li>
            <span className="index">2</span>
            <span className="textHeading">
              HSC
              <br />
            </span>
            <span className="text">
              R.K.Talreja College
              <br />
            </span>
            <span className="text">05/2015 - 05/2017, Ulhasnagar</span>
            <br />
          </li>
        </ul>
      </div>
    </div>
  );
}
