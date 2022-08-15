import React from "react";
import selfPic from "../Images/1660502016675.jpg";

export default function AboutMe() {
  return (
    <div id="aboutMe" className="detailsCard">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4 img-col">
            <img
              src={selfPic}
              className="img-fluid aboutMe-pic"
              alt="..."
            ></img>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">About Me</h5>
              <p className="card-text">
                Hi! My name is Manjiri Vadujkar. <br />
                I am a one-year experienced IT professional. I have a strong
                liking for web development. I have worked on my skills for the
                same by undertaking reputable courses and completing solo
                projects to build a portfolio that showcases my knowledge and
                eagerness to learn new concepts and technologies. <br />
                In my past year at TCS, I have developed essential skills in
                collaboration, customer service, and critical thinking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
