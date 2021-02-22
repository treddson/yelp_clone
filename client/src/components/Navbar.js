import React, { Fragment } from "react";

const Navbar = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link" href="/">
              Home
            </a>
            <a className="nav-item nav-link" href="/restaurants/:id">
              Restaurant Details
            </a>
            <a className="nav-item nav-link" href="/restaurants/:id/update">
              Update Restaurant
            </a>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
