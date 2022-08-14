import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="footer text-center text-dark">
      <div className="container pt-4">
        <section className="mb-4">
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="white"
          >
            <i>
              <FontAwesomeIcon icon={faLinkedin} />
            </i>
          </a>
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
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
      <div className="text-center text-dark p-3">
        © 2022 Copyright:
        <a className="text-dark" href="#">
          Manjiri Vadujkar
        </a>
      </div>
    </footer>
  );
}
