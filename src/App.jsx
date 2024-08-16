import React from "react";
import "./App.css";
import logo from "./assets/logo.png";

function App() {
  return (
    <div className="coming-soon-container">
      <img src={logo} alt="Logo" className="logo" />
      <h3>First Generation Entrepreneurs Club's platform is getting cooked.</h3>
      <h3>Will be served hot very soon.</h3>

      <footer className="footer">
        <p>
          Can't wait till the platform gets cooked? <br />
          Contact us to know more about{" "}
          <strong>First Generation Entrepreneurs Club.</strong>
        </p>
        <br />
        <p className="">
          Reach out to us at{" "}
          <a className="contact-info" href="tel:+917098378871">
            +91 7098378871
          </a>{" "}
          or{" "}
          <a className="contact-info" href="tel:+919749459103">
            +91 9749459103
          </a>{" "}
          or email{" "}
          <a
            className="contact-info"
            href="mailto:admin@firstgenerationentrepreneurs.club"
          >
            admin@firstgenerationentrepreneurs.club
          </a>{" "}
          for updates!
        </p>
      </footer>
    </div>
  );
}

export default App;
