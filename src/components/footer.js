import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="main-footer">
        <footer className="bg-light text-center text-lg-start">
          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2);" }}
          >
            © 2020 Copyright:
            <a className="text-dark" href="https://mdbootstrap.com/">
              MDBootstrap.com
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
