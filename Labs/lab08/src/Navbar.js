import React, { Component } from "react";


class Navbar extends Component {
    render(){
        return(
            <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="/">
              <img id="logo" src="images/logo-footer.png" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="true"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link font-text" href="/">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link font-text" href="#card-section">
                    Skins
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link font-text" href="#howto-section">
                    How&nbsp;To
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link font-text" href="#review-section">
                    Review
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link font-text" href="#">
                    <div id="google_translate_element"></div>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        )
    }
}

export default Navbar;