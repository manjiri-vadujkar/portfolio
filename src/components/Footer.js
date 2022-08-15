import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="footer text-center text-white">
      <div className="container pt-4">
        <section className="mb-4">
          <a
            className="btn btn-link btn-floating btn-lg text-white m-1"
            href="https://www.linkedin.com/in/manjiri-vadujkar-93aa73163/"
            role="button"
            target="__blank"
            data-mdb-ripple-color="white"
          >
            <i>
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </i>
          </a>
          <a
            className="btn btn-link btn-floating btn-lg text-white m-1"
            href="https://github.com/manjiri-vadujkar"
            role="button"
            target="__blank"
            data-mdb-ripple-color="white"
          >
            <i>
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </i>
          </a>
        </section>
      </div>
      <div className="text-center text-white p-3">
        © 2022 Copyright:&nbsp;
        <a className="text-white" href="#">
          Manjiri Vadujkar
        </a>
      </div>
    </footer>
  );
}
